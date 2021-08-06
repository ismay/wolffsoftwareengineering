/* eslint-disable react/jsx-props-no-spreading, react/forbid-prop-types */

import { gql } from "graphql-request";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import T from "prop-types";
import client from "../client";
import Portrait from "../components/portrait";

const components = { Portrait };

export default function Home({ source }) {
  return (
    <>
      <Head>
        <title>Wolff Software Engineering</title>
        <meta
          content="The company of freelance behavioural scientist and software engineer Ismay Wolff."
          name="description"
        />
      </Head>
      <MDXRemote {...source} components={components} />
    </>
  );
}

Home.propTypes = {
  source: T.object.isRequired,
};

export async function getStaticProps() {
  const { page } = await client.request(
    gql`
      query getPage($title: String!) {
        page(where: { title: $title }) {
          mdx
        }
      }
    `,
    { title: "Home" }
  );

  const source = await serialize(page.mdx);

  return {
    props: { source },
    revalidate: 3600,
  };
}

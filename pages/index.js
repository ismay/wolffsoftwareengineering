import Head from "next/head";
import Portrait from "../components/portrait";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolff Software Engineering</title>
      </Head>
      <h2>Hi there</h2>
      <div>
        <Portrait />
        <p>
          <i>
            I am an experienced software engineer who specializes in helping
            teams develop user-friendly, maintainable client-side applications.
          </i>
        </p>
        <p>
          I have over seven years of professional experience as an engineer, and
          I am the maintainer of several successful open source projects. I am
          also an experienced social scientist with a master&apos;s degree in
          social psychology.
        </p>
        <h2>Open Source</h2>
        <p>
          I maintain several successful open source projects. With a distributed
          group of people, I have developed software that has millions of
          downloads per year and tens of thousands of monthly users.
        </p>
        <p>
          Below you will find just a small selection of well-known users of my
          software:
        </p>
        <ul>
          <li>
            <a href="https://github.com/segmentio/metalsmith">metalsmith</a> is
            used by: Mozilla, The W3C, The Node.js Project, LinkedIn, Adobe, NBC
            News, Harvard University, Cornell University, The UK Government
            Digital Service, The US Government&apos;s Department of Veterans
            Affairs and The World Bank.
          </li>
          <li>
            <a href="https://github.com/styled-components/stylelint-processor-styled-components">
              stylelint-processor-styled-components
            </a>{" "}
            is used by: Atlassian, The Guardian, The BBC, The Times, GetStream,
            Sentry, Brave, Material-UI, The National Statistical Institute of
            Norway, The French Government&apos;s Ministry of Labour and CERN.
          </li>
          <li>
            <a href="https://github.com/ismay/stylelint-no-unsupported-browser-features">
              stylelint-no-unsupported-browser-features
            </a>{" "}
            is used by: The Git Project, GitHub, IBM, The Washington Post, The
            Wikimedia Foundation and eBay.
          </li>
        </ul>
        <h2>Social Psychology</h2>
        <p>
          People are a critical part of everything we do as software engineers.
          My background in the social sciences allows me to provide an
          expert&apos;s perspective on all matters related to psychology. I can
          assist organizations in changing organizational processes and can help
          teams truly understand the needs of their users.
        </p>
        <p>
          As a skilled researcher, I am able to guide teams to solutions based
          on verifiable evidence, backed by data. By employing the scientific
          method, decisions will be unbiased and realistic.
        </p>
        <h2>Get in touch</h2>
        <p>
          If the above interests you, or if you want to get in touch for any
          other reason, feel free to{" "}
          <a href="mailto:ismay@wolffsoftwareengineering.nl">contact me</a>!
        </p>
      </div>
    </>
  );
}

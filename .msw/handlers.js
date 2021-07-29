import { graphql } from "msw";
import { home } from "./mocks/pages";

const pages = [home];

const handlers = [
  graphql.query("getPage", (req, res, ctx) => {
    const { title } = req.variables;
    const page = pages.find((p) => p.title === title);

    return res(
      ctx.data({
        page,
      })
    );
  }),
];

export default handlers;

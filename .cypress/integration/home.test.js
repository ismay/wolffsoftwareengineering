const links = [
  { href: "/", name: "Wolff Software Engineering" },
  { href: "http://danieloverbeek.com/", name: "Daniel Overbeek" },
  { href: "https://github.com/segmentio/metalsmith", name: "metalsmith" },
  {
    href: "https://github.com/styled-components/stylelint-processor-styled-components",
    name: "stylelint-processor-styled-components",
  },
  {
    href: "https://github.com/ismay/stylelint-no-unsupported-browser-features",
    name: "stylelint-no-unsupported-browser-features",
  },
  { href: "mailto:ismay@wolffsoftwareengineering.nl", name: "contact me" },
  { href: "mailto:ismay@wolffsoftwareengineering.nl", name: "Email" },
  { href: "https://scholar.social/@ismay", name: "Mastodon" },
  { href: "https://github.com/ismay", name: "Github" },
  {
    href: "https://www.linkedin.com/in/wolffsoftwareengineering",
    name: "Linkedin",
  },
];

const terms = [
  { href: "/pdf/terms-and-conditions.pdf", name: "EN" },
  { href: "/pdf/algemene-voorwaarden.pdf", name: "NL" },
];

describe("home", () => {
  it("renders as expected", () => {
    cy.visit("/");
    cy.injectAxe();

    // Ensure expected links are all present
    links.forEach(({ href, name }) => {
      cy.findByRole("link", { name })
        .should("have.attr", "href", href)
        .and("be.visible");
    });

    // Ensure the terms and conditions links work
    terms.forEach(({ href, name }) => {
      cy.findByRole("link", { name })
        .should("have.attr", "href", href)
        .and("be.visible");
      cy.request(href).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers["content-type"]).to.eq("application/pdf");
      });
    });

    cy.checkA11y();
    cy.percySnapshot("home page renders as expected");
  });
});

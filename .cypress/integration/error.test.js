const links = [
  // Header
  { href: "/", name: "Wolff Software Engineering" },
  // Footer
  { href: "mailto:ismay@wolffsoftwareengineering.nl", name: "Email" },
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

describe("error", () => {
  it("renders as expected", () => {
    cy.visit("/should-not-exist", { failOnStatusCode: false });

    // Ensure the appropriate status code
    cy.request({
      failOnStatusCode: false,
      timeout: 500,
      url: "/should-not-exist",
    }).then((response) => {
      expect(response.status).to.eq(404);
    });

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

    cy.percySnapshot("error page renders as expected");
  });
});

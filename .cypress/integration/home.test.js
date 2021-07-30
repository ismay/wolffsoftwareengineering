describe("home", () => {
  it("renders as expected", () => {
    cy.visit("/");
    cy.injectAxe();

    cy.checkA11y();
    cy.percySnapshot("home page renders as expected");
  });
});

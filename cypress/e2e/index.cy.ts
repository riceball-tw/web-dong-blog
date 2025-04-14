describe('Home page should work', () => {
  const defaultLocale = Cypress.env('defaultLocale');

  beforeEach(() => {
    cy.visit(`/${defaultLocale}/`);
  });

  it('Last update link should work', () => {
    cy.dataCy('last-update-link')
      .should('be.visible')
      .then(($link) => {
        cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
      });
  });
});

describe('All post page is effective', () => {
  const defaultLocale = Cypress.env('defaultLocale');

  beforeEach(() => {
    cy.visit(`/${defaultLocale}/post/`);
  });

  it('Post taxonomy links should work', () => {
    cy.dataCy('categories-link')
      .should('be.visible')
      .then(($link) => {
        cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
      });

    cy.dataCy('tags-link')
      .should('be.visible')
      .then(($link) => {
        cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
      });
  });
});

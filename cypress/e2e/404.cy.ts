describe('404 Page is effective', () => {
  it('Has link directing away from the 404 page', () => {
    // Home link
    cy.visit('/404', { failOnStatusCode: false });
    cy.dataCy('home-link').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);

    // Post link
    cy.visit('/404', { failOnStatusCode: false });
    cy.dataCy('post-link').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/post`);
  });
});

describe('Post categories page is effective', () => {
  const defaultLocale = Cypress.env('defaultLocale');

  beforeEach(() => {
    cy.visit(`${defaultLocale}/post/categories`);
  });

  it('Category links is working', () => {
    cy.dataCy('category-link').each(($link) => {
      cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
    });
  });
});

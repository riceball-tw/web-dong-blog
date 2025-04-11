describe('Post categories page is effective', () => {
  const locale = Cypress.env('defaultLocale');

  beforeEach(() => {
    cy.visit(`${locale}/post/tags`);
  });

  it('Tag links is working', () => {
    cy.dataCy('tag-link').each(($link) => {
      cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
    });
  });
});

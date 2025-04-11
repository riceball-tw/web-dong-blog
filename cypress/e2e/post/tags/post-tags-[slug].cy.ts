describe('Tag page is effective', () => {
  const locale = Cypress.env('defaultLocale');

  beforeEach(() => {
    const categorySlug = 'TagOne';
    cy.visit(`${locale}/post/tags/${categorySlug}`);
  });

  it('Tags link is working', () => {
    cy.dataCy('tags-link')
      .should('be.visible')
      .then(($link) => {
        cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
      });
  });
});

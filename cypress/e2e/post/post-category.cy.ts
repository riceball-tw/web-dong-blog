describe('Post categories page is effective', () => {
  beforeEach(() => {
    cy.visit('/post/categories');
  });

  it('Category links is working', () => {
    cy.dataCy('category-link').each(($link) => {
      cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
    });
  });
});

describe('Category page is effective', () => {
  beforeEach(() => {
    const categorySlug = 'CategoryOne';
    cy.visit(`post/categories/${categorySlug}`);
  });

  it('Categories link is working', () => {
    cy.dataCy('categories-link')
      .should('be.visible')
      .then(($link) => {
        cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
      });
  });
});

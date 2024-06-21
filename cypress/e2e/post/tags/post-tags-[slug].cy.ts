describe('Tag page is effective', () => {
  beforeEach(() => {
    const categorySlug = 'TagOne';
    cy.visit(`post/tags/${categorySlug}`);
  });

  it('Tags link is working', () => {
    cy.dataCy('tags-link')
      .should('be.visible')
      .then(($link) => {
        cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
      });
  });
});

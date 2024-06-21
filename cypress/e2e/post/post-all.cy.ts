describe('All post page should work', () => {
  beforeEach(() => {
    cy.visit('/post/');
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

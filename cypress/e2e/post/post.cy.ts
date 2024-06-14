describe('Post is effective', () => {
  it('Page is effective', () => {
    cy.visit('/post/demo-post', { failOnStatusCode: false });

    // Post Header
    cy.dataCy('post-icon-container').find('svg').should('exist');
    cy.dataCy('post-title').should('have.prop', 'tagName', 'H1').should('not.be.empty');
    cy.dataCy('post-subtitle').should('not.be.empty');
    cy.dataCy('category').should('not.be.empty');
    cy.dataCy('tags')
      .find('[data-cy=tag]')
      .each(($tag) => {
        cy.wrap($tag).should('not.be.empty');
      });
  });
});

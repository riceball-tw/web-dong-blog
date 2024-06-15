describe('Post is effective', () => {
  beforeEach(() => {
    cy.visit('/post/demo-post');
  });

  it('Header should visible and working', () => {
    cy.dataCy('post-icon-container').find('svg').should('exist');
    cy.dataCy('post-title').should('have.prop', 'tagName', 'H1').should('not.be.empty');
    cy.dataCy('post-subtitle').should('not.be.empty');
    cy.dataCy('category').should('not.be.empty');
    cy.dataCy('tag-link').each(($link) => {
      cy.wrap($link).should('not.be.empty');
      cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
    });
  });

  it('Comment should load', () => {
    cy.dataCy('post-comment').scrollIntoView();
    cy.dataCy('post-comment').should('not.be.empty');
  });

  it('Heading links should visible and working', () => {
    cy.dataCy('post-content')
      .find(
        'h2 .rehype-auto-link, h3 .rehype-auto-link, h4 .rehype-auto-link, h5 .rehype-auto-link, h6 .rehype-auto-link',
      )
      .each(($link) => {
        cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
      });
  });
});

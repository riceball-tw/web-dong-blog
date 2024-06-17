describe('Post categories page is effective', () => {
  beforeEach(() => {
    cy.visit('/post/tags');
  });

  it('Tag links is working', () => {
    cy.dataCy('tag-link').each(($link) => {
      cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
    });
  });
});

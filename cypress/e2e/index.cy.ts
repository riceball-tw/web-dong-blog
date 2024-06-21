describe('Home page should work', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Last update link should work', () => {
    cy.dataCy('last-update-link')
      .should('be.visible')
      .then(($link) => {
        cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
      });
  });
});

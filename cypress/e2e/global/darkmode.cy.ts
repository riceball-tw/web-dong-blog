describe('Darkmode is effective', () => {
  // Manually toggle, preference should be remembered after revisit
  it('Toggle Theme', () => {
    cy.visit('/');
    cy.get('html').as('theme-element');

    // 1. Manually Toggle Theme should work
    cy.get('@theme-element').should('have.class', 'light');
    cy.dataCy('theme-toggle').click();
    cy.get('@theme-element').should('have.class', 'dark');

    // 2. Reload Should Preserve Theme
    cy.reload();
    cy.get('@theme-element').should('have.class', 'dark');

    // 3. Toggle Should work after apply preference
    cy.dataCy('theme-toggle').click();
    cy.get('@theme-element').should('have.class', 'light');

    // 4. After switch to different page toggle should work
    cy.visit('/post');
    cy.dataCy('theme-toggle').click();
    cy.get('@theme-element').should('have.class', 'dark');
  });
});

describe('Darkmode is effective', () => {
  const defaultLocale = Cypress.env('defaultLocale');

  // Manually toggle, preference should be remembered after revisit
  it('Toggle Theme', () => {
    cy.visit(`/${defaultLocale}/`);
    cy.get('html').as('theme-element');

    // 1. Manually Toggle Theme should work
    cy.get('@theme-element').should('have.attr', 'data-theme', 'light');
    cy.dataCy('theme-toggle').shadow().find('[data-cy="theme-toggle-button"]').click();
    cy.get('@theme-element').should('have.attr', 'data-theme', 'dark');

    // 2. Reload Should Preserve Theme
    cy.reload();
    cy.get('@theme-element').should('have.attr', 'data-theme', 'dark');

    // 3. Toggle Should work after apply preference
    cy.dataCy('theme-toggle').shadow().find('[data-cy="theme-toggle-button"]').click();

    cy.get('@theme-element').should('have.attr', 'data-theme', 'light');

    // 4. After switch to different page toggle should work
    cy.visit(`/${defaultLocale}/post`);
    cy.dataCy('theme-toggle').shadow().find('[data-cy="theme-toggle-button"]').click();
    cy.get('@theme-element').should('have.attr', 'data-theme', 'dark');
  });
});

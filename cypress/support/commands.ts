Cypress.Commands.add('dataCy', (value) => cy.get(`[data-cy=${value}]`));

// Can you test if an element is scrolled to
// https://stackoverflow.com/a/70145908/14927277
Cypress.Commands.add('isScrolledTo', { prevSubject: true }, (element) => {
  cy.get(element).should(($el) => {
    const windowHeight = Cypress.$(cy.state('window')).height();
    const bottom = typeof windowHeight === 'number' ? windowHeight : 0;
    const rect = $el[0].getBoundingClientRect();
    expect(rect.top).not.to.be.greaterThan(bottom, `Expected element not to be below the visible scrolled area`);
    expect(rect.top).to.be.greaterThan(0 - rect.height, `Expected element not to be above the visible scrolled area`);
  });
});

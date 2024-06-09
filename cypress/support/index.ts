declare namespace Cypress {
  interface Chainable {
    /**
     * Select DOM Element by data-cy data attribute
     * @example cy.dataCy('submit-button')
     */
    dataCy(value: string): Chainable<JQuery<HTMLElement>>;
  }
}

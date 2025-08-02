declare namespace Cypress {
	interface Chainable {
		// https://github.com/cypress-io/cypress/issues/4771#issuecomment-1324210289
		// Property 'state' does not exist on type 'Chainable<undefined>'
		state(state: any): any;
		/**
		 * Select DOM Element by data-cy data attribute
		 * @example cy.dataCy('submit-button')
		 */
		dataCy(value: string): Chainable<JQuery<HTMLElement>>;
	}
}

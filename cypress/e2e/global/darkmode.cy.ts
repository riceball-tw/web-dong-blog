describe("Darkmode is effective", () => {
	const defaultLocale = Cypress.env("defaultLocale");

	// Manually toggle, preference should be remembered after revisit
	it("Toggle Theme", () => {
		cy.visit(`${defaultLocale}/`);
		cy.get("html").as("theme-element");

		// Detect initial theme (light or dark) regardless of OS preference
		cy.get("@theme-element")
			.invoke("attr", "data-theme")
			.then((initialTheme) => {
				const isInitiallyLight = initialTheme === "light";

				// 1. Manually Toggle Theme should work
				cy.dataCy("theme-toggle")
					.shadow()
					.find('[data-cy="theme-toggle-button"]')
					.click();

				const afterFirstToggle = isInitiallyLight ? "dark" : "light";
				cy.get("@theme-element").should(
					"have.attr",
					"data-theme",
					afterFirstToggle,
				);

				// 2. Reload Should Preserve Theme
				cy.reload();
				cy.get("@theme-element").should(
					"have.attr",
					"data-theme",
					afterFirstToggle,
				);

				// 3. Toggle Should work after apply preference
				cy.dataCy("theme-toggle")
					.shadow()
					.find('[data-cy="theme-toggle-button"]')
					.click();
				cy.get("@theme-element").should(
					"have.attr",
					"data-theme",
					initialTheme,
				);

				// 4. After switch to different page toggle should work
				cy.visit(`${defaultLocale}/post`);
				cy.dataCy("theme-toggle")
					.shadow()
					.find('[data-cy="theme-toggle-button"]')
					.click();
				cy.get("@theme-element").should(
					"have.attr",
					"data-theme",
					afterFirstToggle,
				);
			});
	});
});

import { baseUrl, languages } from "../../../src/utils/i18n.ts";

Object.keys(languages).forEach((locale) => {
	describe(`locale ${locale} should work`, () => {
		const defaultLocale = Cypress.env("defaultLocale");
		// Extract base path from Cypress baseUrl (e.g., "/dong/")
		const basePath = new URL(
			Cypress.config("baseUrl") || "http://localhost:4321",
		).pathname;

		beforeEach(() => {
			cy.visit(`${locale}`);
		});

		it(`SEO attributes should be correct`, () => {
			// <HTML> lang attribute should be current locale
			cy.get("html")
				.invoke("attr", "lang")
				.then((lang) => {
					cy.wrap(lang).as("currentLanguage");
				});
			cy.get("@currentLanguage").then((currentLanguage) => {
				expect(currentLanguage).to.eq(locale);
			});

			// <link rel="alternate" hreflang="x" href="y"> should exist and correct
			// Expected format: site + base + locale + /   e.g. https://riceball-tw.github.io/dong/zh-tw/
			cy.get(`link[rel="alternate"][hreflang="x-default"]`).should(
				"have.attr",
				"href",
				`${baseUrl}${basePath}${defaultLocale}/`,
			);
			cy.get(`link[rel="alternate"][hreflang="${locale}"]`).should(
				"have.attr",
				"href",
				`${baseUrl}${basePath}${locale}/`,
			);
		});

		it(`Current locale should be able to switch to other language`, () => {
			// Havn't found a way to await scroll end, force click for now
			cy.dataCy("change-language").click({ force: true });
			cy.dataCy("avaliable-language").each(($language) => {
				cy.request("GET", $language.prop("href"))
					.its("status")
					.should("eq", 200);
			});
		});
	});
});

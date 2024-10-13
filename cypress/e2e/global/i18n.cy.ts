import { languages, baseUrl } from '../../../src/utils/i18n.ts';

Object.keys(languages).forEach((locale) => {
  describe(`locale ${locale} should work`, () => {
    beforeEach(() => {
      cy.visit(`/${locale}`);
    });

    it(`SEO attributes should be correct`, () => {
      // <HTML> lang attribute should be current locale
      cy.get('html')
        .invoke('attr', 'lang')
        .then((lang) => {
          cy.wrap(lang).as('currentLanguage');
        });
      cy.get('@currentLanguage').then((currentLanguage) => {
        expect(currentLanguage).to.eq(locale);
      });

      // <link rel="alternate" hreflang="x" href="y"> should exist and correct
      cy.get(`link[rel="alternate"][hreflang="x-default"]`).should('have.attr', 'href', `${baseUrl}/`);
      cy.get(`link[rel="alternate"][hreflang="${locale}"]`).should('have.attr', 'href', `${baseUrl}/${locale}`);
    });

    it(`Current locale should be able to switch to other language`, () => {
      cy.dataCy('change-language').scrollIntoView();
      cy.get('[data-cy=change-language]').isScrolledTo('change-language');
      cy.dataCy('change-language').click();
      cy.dataCy('avaliable-language').each(($language) => {
        cy.request('GET', $language.attr('href')).its('status').should('eq', 200);
      });
    });
  });
});

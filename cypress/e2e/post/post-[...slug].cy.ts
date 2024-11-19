import { defaultLocale } from '../../../src/utils/i18n.ts';

describe('Post is effective', () => {
  beforeEach(() => {
    cy.visit(`/post/${defaultLocale}/demo-post`);
  });

  it('Header should visible and working', () => {
    cy.dataCy('post-icon-container').find('svg').should('exist');
    cy.dataCy('post-title').should('have.prop', 'tagName', 'H1').should('not.be.empty');
    cy.dataCy('post-subtitle').should('exist').should('not.be.empty');
    cy.dataCy('category').should('exist').should('not.be.empty');
    cy.dataCy('tag-link').each(($link) => {
      cy.wrap($link).should('not.be.empty');
      cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
    });
  });

  it('Comment should load', () => {
    cy.dataCy('post-comment').scrollIntoView();
    cy.dataCy('post-comment').should('not.be.empty');
  });

  it('Heading links should visible and working', () => {
    cy.dataCy('post-content')
      .find(
        'h2 .rehype-auto-link, h3 .rehype-auto-link, h4 .rehype-auto-link, h5 .rehype-auto-link, h6 .rehype-auto-link',
      )
      .each(($link) => {
        cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
      });
  });

  it('Table of contents should visible and working', () => {
    cy.viewport('macbook-15');

    // Check all post title is available in TOC
    cy.dataCy('toc-link').each(($link) => {
      cy.wrap($link)
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('not.be.empty');
          cy.dataCy('post-content').contains(text);
        });
      cy.request('GET', $link.attr('href')).its('status').should('eq', 200);
    });

    // Check when click last TOC link, will direct to the related heading

    // cy.dataCy('toc').within(() => {
    // cy.dataCy('accordion-content').scrollTo('bottom');
    // });
    // cy.window().scrollTo('bottom'); // Seems like scroll needs time?
    // No idea why next action will cause scrolling to bottom stop
    // So I added this line to avoid next action stop the scrolling action too early
    // cy.window().its('scrollY').should('not.equal', 0);

    cy.dataCy('toc-link')
      .last()
      .then(($lastLink) => {
        cy.wrap($lastLink).click({ force: true }); // Page Scroll seems not working at the time, so I just force click the link outside of the viewport for now :(
        cy.url().should('include', $lastLink.attr('href'));
      });
  });

  it('Series recommendation should visible and working', () => {
    cy.viewport('macbook-15');
    cy.dataCy('series-summary').should('exist');
    cy.dataCy('post-title')
      .invoke('text')
      .then((postTitle) => {
        cy.wrap(postTitle).as('postTitle');
      });

    cy.dataCy('series-active')
      .should('have.length', 1)
      .invoke('text')
      .then((activeSeriesTitle) => {
        cy.wrap(activeSeriesTitle).as('activeSeriesTitle');
      });

    cy.get('@postTitle').then((postTitle) => {
      cy.get('@activeSeriesTitle').then((activeSeriesTitle) => {
        expect(postTitle).to.equal(activeSeriesTitle);
      });
    });
  });
});

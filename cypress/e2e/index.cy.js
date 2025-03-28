describe('Testing Prowly website', () => { 

  it('Accepts all cookies', () => {
    cy.visit("www.prowly.com");
    cy.get('button.ch2-btn.ch2-allow-all-btn.ch2-btn-primary').click();
    cy.get('button.ch2-btn.ch2-allow-all-btn.ch2-btn-primary').should('not.be.visible')
  });

  it('Open /Product/ menu', () => {
    cy.visit("www.prowly.com");
    cy.get('button#\\:R2miimH2\\:').click();
    cy.get('span.paragraph-5.block.font-sans.font-bold.group-hover\\:text-purple-prowly-darker.group-hover\\:no-underline').should('be.visible');
  });
  })
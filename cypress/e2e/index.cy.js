//describe('Testing Prowly website', () => {
    //it('Visit page and accepts cookies', () => {
   // cy.visit("www.prowly.com");
   // cy.get("#ch2-dialog-description").should("be.visible");
   //cy.get("#ch2-allow-all-btn").click
    //cy.get("#ch2-dialog-description").should("not.be.visible");
   // })
  //})


  it('Visit page and scrolls down', () => {
    cy.visit("www.prowly.com");
    cy.get("Your new favorite PR software").scrollIntoView;
    cy.get("Your new favorite PR software").should('be.visible');
  })

 //it('Visit page and login with wrong data', () => {
  //  cy.visit("www.prowly.com");
	//	cy.get('//*[@id="__main"]/header/div/nav/div/a[2]').click

		//cy.get('@myUsername').clear(); //clears input field //this one uses an alias that was created in line 6
		//cy.get('#user_login').type('username', { delay: 100 }); //types in username

		//cy.get('#user_password').as('myPassword'); //creates an alias //this one uses an alias that was created in line 6

		//cy.get('@myPassword').clear(); //clears input field
		//cy.get('#user_password').type('password', { delay: 100 }); //types in password

		//cy.get('[name="submit"]').click(); //taps on the 'submit' button
		//cy.go(-1); //goes back to the previous page it can also go forward
		//cy.go('forward'); //goes back to the previous page it can also go forward
  //})
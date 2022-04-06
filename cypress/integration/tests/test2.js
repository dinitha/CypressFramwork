import LoginPage from '../../support/PageObjects/LoginPage';

describe('mandatory field validation', function() {
    

    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('login test case 2', function() {

    const loginPage=new LoginPage();
    
    
    cy.visit(Cypress.env('url'));
    loginPage.getEmail().click();
    loginPage.getPassword().click();
    loginPage.getEmail().click();
    cy.get(loginPage.getEmailMandatoryMessage).should('have.text', 'The email field is required.');
    cy.get(loginPage.getPasswordMandatoryMessage).should('have.text', 'The password field is required.');
    
})
})
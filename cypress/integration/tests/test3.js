import LoginPage from '../../support/PageObjects/LoginPage';

describe('password should be at least eight charactors long', function() {
    

    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('login test case 3', function() {

    const loginPage=new LoginPage();
    
    
    cy.visit(Cypress.env('url'));
    loginPage.getEmail().type(this.data.Email);
    loginPage.getPassword().type(this.data.PasswordShort);
        
    cy.get(loginPage.getPasswordShortMessage).should('have.text', 'The password must be at least 8 characters.');

    
})
})
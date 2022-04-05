import LoginPage from '../../support/PageObjects/LoginPage';

describe('User should not be able in login to the application with incorrect username and password ', function() {
    

    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('login test case 1', function() {

    const loginPage=new LoginPage();
    
    
    cy.visit(Cypress.env('url'));
    loginPage.getEmail().type(this.data.Email);
    loginPage.getPassword().type(this.data.Password);
    loginPage.getLoginButton().click();


//    loginPage.getLoginUserName().should('have.value',this.data.Username);

    
})
})
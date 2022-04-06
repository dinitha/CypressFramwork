import LoginPage from '../../support/PageObjects/LoginPage';
import ResetPasswordPage from '../../support/PageObjects/ResetPasswordPage';

describe('Reset password', function() {
    

    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('login test case 4', function() {

    const loginPage=new LoginPage();
    const resetPasswordPage = new ResetPasswordPage();
    
    
    cy.visit(Cypress.env('url'));
    loginPage.getForgotPassword().click();
        
    resetPasswordPage.getEmail().type(this.data.Email);
    resetPasswordPage.getRestore().click();
    
})
})
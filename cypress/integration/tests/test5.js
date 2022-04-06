import LoginPage from '../../support/PageObjects/LoginPage';
import TermsAndConditionsPage from '../../support/PageObjects/TermsAndConditions';

describe('Terms and conditions', function() {
    

    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('login test case 5', function() {

    const loginPage=new LoginPage();
    const termsAndConditionsPage = new TermsAndConditionsPage();
    
    
    cy.visit(Cypress.env('url'));
    loginPage.getTermsAndConditions().click();
    cy.get(termsAndConditionsPage.getTermsAndConditions).should('have.text', 'Terms');
    
})
})
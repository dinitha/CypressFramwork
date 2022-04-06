class LoginPage {
    
    getEmail(){
        return cy.get('input[name="email"]');
    }
    getPassword(){
        return cy.get('input[name="password"]');
    }
    getLoginButton(){
        return cy.get('button[type="submit"]');
    }
    getEmailMandatoryMessage(){
        return cy.get('li[title="The email field is required."]');
    }
    getPasswordMandatoryMessage(){
        return cy.get('li[title="The password field is required."]');
    }
    getPasswordShortMessage(){
        return cy.get('li[title="The password must be at least 8 characters."]');
    }
    getForgotPassword(){
        return cy.get('li[title="The password must be at least 8 characters."]');
    }
    getForgotPassword(){
        return cy.get('a[href="/auth/forgot-password"]');
    }
    getTermsAndConditions(){
        return cy.get('a[href="/terms"]');
    }


    }
    export default LoginPage
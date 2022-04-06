class ResetPasswordPage {
    
    getEmail(){
        return cy.get('input[name="email"]');
    }
    getRestore(){
        return cy.get('button[type="submit"]');
    }
    
    
    }
    export default ResetPasswordPage
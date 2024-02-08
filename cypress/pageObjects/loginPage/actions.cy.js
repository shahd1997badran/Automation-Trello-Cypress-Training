class LoginPageActions{
    // methods needed in login page
    openLoginPage(){
        cy.visit("/auth/login")
        return this;
    }
    loginToWebsite(){
        cy.login()
        return this;
    }
    typeInUsernameInputField(email){
        cy.get("[placeholder=Username]").clear().type(email);
        return this;
    }

    typeInPasswordInputField(password){
        cy.get("[placeholder=Password]").clear().type(password);
        return this;
    }

    clickOnLoginButton(){
        cy.get(".orangehrm-login-action").click();
        return this;
    }
    checkForgotPasswordURL(){
        cy.get(".orangehrm-login-forgot").click();
        return this;
    }
    clickOnOrangeHRMURL(){
        cy.get("[target=_blank]").last().click();
        return this;

    }
    clickOnLinkedInURL(){
        cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').invoke('removeAttr', 'target').click();
        cy.origin('https://www.linkedin.com',()=>{
            cy.url().should("eql","https://www.linkedin.com/company/orangehrm")
        });
    }
    clickOnFacebookURL(){
        cy.get('a[href="https://www.facebook.com/OrangeHRM/"]').invoke("removeAttr","target").click();
        cy.origin('https://www.facebook.com',()=>{
            cy.url().should("eql","https://www.facebook.com/OrangeHRM/")
        });
    }

    clickOnTwitterURL() {
        cy.get('a[href="https://twitter.com/orangehrm?lang=en"]').invoke('removeAttr', 'target').click();
        cy.origin('https://twitter.com',()=>{
            cy.url().should("eql","https://twitter.com/orangehrm?lang=en")
        });
    }

    clickOnYoutubeURL() {
        cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]').invoke('removeAttr', 'target').click();
        cy.origin('https://www.youtube.com',()=>{
            cy.url().should("eql","https://www.youtube.com/c/OrangeHRMInc")
        });
    }
}

export default LoginPageActions;
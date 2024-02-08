class LoginPageAssertions {
    // methods needed for assertions in login page 
    checkUserNameInputErrorMesage(){
      cy.get(".oxd-input-field-error-message").first().should("contain","Required");
      return this;

    }
    checkPasswordInputErrorMesage(){
      cy.get(".oxd-input-field-error-message").last().should("contain","Required");
      return this;

    }
    checkInvalidCredentialsMessage(){
      cy.get(".oxd-alert--error").should("contain","Invalid credentials");
      return this;

    }
    checkUrlEqualValue(url){
        cy.url().should("eq",url);
        return this;
    }
    ckeckOrangeHRMURL(hrmUrl){
      cy.origin(hrmUrl,()=>{
        cy.url().should("eq",url);
      })
      return this;
    }
    checkPageTitleContainValue(value){
        cy.get("h6").should("contain", value);
        return this;
    }
  }
  
  
  export default LoginPageAssertions;
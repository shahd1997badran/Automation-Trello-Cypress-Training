class UpdateTemplateCardActions{
    clickOnTemplateUpdateButton(){
        cy.get("[data-testid=card-name]").click();

        return this;
    }
    enterUpdatedTitleTemplate(title){
        cy.get(".window-title").click();
        cy.get(".window-title").clear().type(title);
        return this;
    }
    clickOnSaveButton(){
        cy.get("[aria-label='Close dialog']").click();
        return this;
    }

}
export default UpdateTemplateCardActions
class CreateTemplateCardActions{
    clickOnTemplateCardIcon(){
        cy.get("[data-testid='card-template-list-button']").first().click();
        return this;
    }
    clickOnCreateNewTemplate(){
        cy.contains("button","Create a new template").click();
        return this;
    }
    enterTemplateTitle(title){
        cy.get("[data-testid=create-template-card-composer]").type(title)
        return this;
    }
    clickOnAddButton(){
        cy.get("[data-testid=new-template-card-submit-button]").click({timeout: 20000});
        cy.get("[aria-label='Close dialog']").click();
        return this;
    }

}
export default CreateTemplateCardActions
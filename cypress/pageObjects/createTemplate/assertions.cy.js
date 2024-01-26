class CreateTemplateCardAssertions{
    checkTemplateCardIsExist(){
        // cy.wait(2000)
        // cy.get("[data-testid=quick-card-editor-card-title]").should("be.visible");
        return this;
    }
    checkTemplateCardIsContain(title){
        cy.get("[data-testid=card-name]").should("contain",title);
        return this;
    }

}
export default CreateTemplateCardAssertions
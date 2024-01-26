class HideTemplateActions{
    clickOnArchiveButton(){
        cy.get("[data-testid=quick-card-editor-buttons]").find("[data-testid=quick-card-editor-archive]").click()
        return this;
    }

}
export default HideTemplateActions
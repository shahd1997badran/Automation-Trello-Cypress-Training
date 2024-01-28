class HideTemplateAssertions{
    checkTemplateIsHidden(templateTitle,listTitleHideFrom){
        cy.get("[data-testid='lists']")
            .find(`li:contains(${listTitleHideFrom})`)
            .find('ol')
            .should('not.contain',templateTitle);
        return this;
    }
}
export default HideTemplateAssertions
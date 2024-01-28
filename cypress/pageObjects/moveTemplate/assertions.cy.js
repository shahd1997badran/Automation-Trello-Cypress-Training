class MoveTemplateAssertions{
    checkTemplateCardNewList(templateTitle,listTitleToMove,listTitleMoveFrom){
        cy.get("[data-testid='lists']")
        .find('li', listTitleToMove)
        .contains(templateTitle)
        .should("be.visible")

        cy.get("[data-testid='lists']")
            .find(`li:contains(${listTitleMoveFrom})`)
            .find('ol')
            .should('not.contain',templateTitle)

        return this;
    }

}
export default MoveTemplateAssertions
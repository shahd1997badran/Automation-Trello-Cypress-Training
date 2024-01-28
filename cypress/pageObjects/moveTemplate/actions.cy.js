

class MoveTemplateActions{
    clickOnTemplateIcon(templateTitle,listTitleMoveFrom){
        cy.get("[data-testid='lists']")
            .find(`li:contains(${listTitleMoveFrom})`)
            .find(`ol>li:contains(${templateTitle})`)
            .get("[data-testid='EditIcon']")
            .click({force: true});
        return this;
    }
    clickOnMoveOption(){
        cy.get("[data-testid=quick-card-editor-buttons]").find("[data-testid=quick-card-editor-move]").click()
        return this;
    }
    chooseListToMove(listTitleToMove){
       
        cy.get("[data-testid='move-card-popover-select-list-destination']").select(listTitleToMove);
        return this;
    }
    clickOnMoveButton(){
        cy.get("[data-testid=move-card-popover-move-button]").click();
        return this;
    }

}
export default MoveTemplateActions
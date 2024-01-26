class MoveTemplateActions{
    clickOnTemplateIcon(){
        cy.get("[data-testid='EditIcon']").click({force: true});
        return this;
    }
    clickOnMoveOption(){
        cy.get("[data-testid=quick-card-editor-buttons]").find("[data-testid=quick-card-editor-move]").click()
        return this;
    }
    chooseListToMove(){
        cy.get("[data-testid='move-card-popover-select-list-destination']").select(2);
        return this;
    }
    clickOnMoveButton(){
        cy.get("[data-testid=move-card-popover-move-button]").click();
        return this;
    }

}
export default MoveTemplateActions
class DeleteCardActions{
    archiveTheCard(){
        cy.get("[data-testid='EditIcon']").click({force: true});
        cy.get("[data-testid='ArchiveIcon']").click();
        cy.wait(2000);
        return this;
    }
    clickOnMenu(){
        cy.get("[data-testid='OverflowMenuHorizontalIcon']").click({force: true,multiple: true});
        return this;
    }
    deleteArchivedItem(){
        cy.contains("Archived items").click({force: true});
        cy.contains("Delete").click();
        cy.get("[value='Delete']").click();
        return this;
    }

}
export default DeleteCardActions
class CreateListActions{
    clickOnAddAnotherListButton(){

        cy.get("[data-testid='list-composer-button']").click({force: true});
        return this;
    };

    typeInListTitleField(title){
        cy.get("[placeholder='Enter list title…']").clear().type(title);
        return this;

    };
    clickOnAddListButton(){
        cy.contains("button","Add list").click();
        cy.screenshot({capture:"fullPage"})
        //cy.get("[data-testid='list-card-composer-cancel-button']").click({force:true});
        return this;

    };

}
export default CreateListActions;
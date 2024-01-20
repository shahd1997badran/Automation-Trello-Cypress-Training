class CreateCardActions{
    clickOnAddCardButton(){

        cy.get("[data-testid='list-add-card-button']").first().click();
        return this;
    };

    typeInCardTitleField(title){
        cy.get("[data-testid='list-card-composer-textarea']").first().clear().type(title);
        return this;

    };
    clickOnAddCardTypedButton(){
        cy.contains("button","Add card").click();
        //cy.get("[data-testid='list-card-composer-cancel-button']").click({force:true});
        return this;

    };

}
export default CreateCardActions;
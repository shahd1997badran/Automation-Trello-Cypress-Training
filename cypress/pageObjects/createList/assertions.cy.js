class CreateListAssertions{
    checkListIsExist(){
        cy.get("[data-testid='list-name']").should("be.visible");

        return this;
    };
    checkListIsContain(title){
        //cy.get("[data-testid='list-name']").should("contain",title);
        cy.get("[data-testid='lists']")
            .find(`li:contains(${title})`)
            .should('contain',title)

        return this;
    };

}
export default CreateListAssertions
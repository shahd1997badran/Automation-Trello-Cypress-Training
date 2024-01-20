class CreateCardAssertions{
    checkCardIsExist(){
        cy.get("[data-testid='card-name']").should("be.visible");

        return this;
    };
    checkCardIsContain(title){
        cy.get("[data-testid='card-name']").should("contain",title);
        return this;
    };
}
export default CreateCardAssertions 
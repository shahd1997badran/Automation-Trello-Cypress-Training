class UpdateListAssertions{
    checkTheNameIsUpdated(val1,val2){
        cy.get("[data-testid='list-name']").eq(0).should("contain",val1);
        cy.get("[data-testid='list-name']").eq(1).should("contain",val2);
        //cy.get("[data-testid=list-name]").eq(2).should("contain",val3);
        return this;
    }

}
export default UpdateListAssertions
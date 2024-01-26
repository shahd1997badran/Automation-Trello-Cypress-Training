class DeleteCardAssertions{
    checkCardIsNotExist(){
        cy.get(".empty-list").should("contain","No archived cards");

        return this;
    }

}
export default DeleteCardAssertions
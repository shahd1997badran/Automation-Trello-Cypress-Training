class SharedActions{
    openBoard(url){
        cy.visit(url);
        return this;
    }
}
export default SharedActions;
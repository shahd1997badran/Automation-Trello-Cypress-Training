class UpdateListActions{
    updateNameOfTheList(val1,val2,val3){
        cy.contains("textarea","To Do").click({force: true});
        cy.contains("textarea","To Do").clear().type(val1);
        cy.contains("textarea","Doing").click({force: true});
        cy.contains("textarea","Doing").clear().type(val2);
        cy.contains("textarea","Done").click({force: true});
        cy.contains("textarea","Done").clear().type(val3);
        return this;
    }
}
export default UpdateListActions
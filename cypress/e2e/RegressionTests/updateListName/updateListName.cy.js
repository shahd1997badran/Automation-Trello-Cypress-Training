/// <reference types="cypress" />

import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import UpdateListActions from "../../../pageObjects/updateList/actions.cy";
import UpdateListAssertions from "../../../pageObjects/updateList/assertions.cy";
let Random = Math.floor(Math.random()*100);
const boardName ='Shahd Board'+Random;
const val1="Updated To Do";
const val2="Updated Doing";
const val3="Updated Done";
const sharedUtils= new SharedDataUtils();
const sharedActions= new SharedActions();
const updateListActions =new UpdateListActions();
const updateListAssertions=new UpdateListAssertions();
Before(()=>{
    cy.trelloLogin();
    cy.wait(2000);
    sharedUtils.createNewBoard(boardName).as('boardResponse');
});

Given("The user navigated to the board",()=>{
    cy.wait(2000);
    cy.get("@boardResponse").then((response)=>{
        cy.log(response);
        sharedActions.openBoard(response.body.url);

    });
});
When("Update the name of the default lists",()=>{
    updateListActions.updateNameOfTheList(val1,val2,val3);

});
Then("Check the updated lists",()=>{
    updateListAssertions.checkTheNameIsUpdated(val1,val2,val3);
});

// after(()=>{
//     //sharedUtils.deleteBoard(boardId);
//     cy.get("@boardResponse").then((response)=>{
//         sharedUtils.deleteBoard(response.body.id);

//     });


// });
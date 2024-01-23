/// <reference types="cypress" />
import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import CreateListActions from "../../../pageObjects/createList/actions.cy";
import CreateListAssertions from "../../../pageObjects/createList/assertions.cy";
let Random = Math.floor(Math.random()*100);
const boardName ='Shahd Board'+Random;
const listTitle ='Shahd List'+Random;
const sharedUtils= new SharedDataUtils();
const sharedActions= new SharedActions();
const createListActions = new CreateListActions();
const createListAssertions = new CreateListAssertions();
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
When("Clicks on add a nother list",()=>{
    createListActions.clickOnAddAnotherListButton()
});
When("Enters title of the list",()=>{
    createListActions.typeInListTitleField(listTitle)
});
When("Clicks on add list button",()=>{
    createListActions.clickOnAddListButton()
});
Then("A new list will be created",()=>{
    createListAssertions.checkListIsExist()
    createListAssertions.checkListIsContain(listTitle)
});

// after(()=>{
//     //sharedUtils.deleteBoard(boardId);
//     cy.get("@boardResponse").then((response)=>{
//         sharedUtils.deleteBoard(response.body.id);

//     });


// });
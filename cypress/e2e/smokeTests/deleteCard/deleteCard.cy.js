/// <reference types="cypress" />

import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import CreateCardActions from "../../../pageObjects/createCard/actions.cy";
import CreateCardAssertions from "../../../pageObjects/createCard/assertions.cy";
import DeleteCardActions from "../../../pageObjects/deleteCard/actions.cy";
import DeleteCardAssertions from "../../../pageObjects/deleteCard/assertions.cy";

let Random = Math.floor(Math.random()*100);
const boardName ='Shahd Board'+Random;
const cardTitle ='Shahd Card'+Random;
const sharedUtils= new SharedDataUtils();
const sharedActions= new SharedActions();
const createCardActions = new CreateCardActions();
const createCardAssertions = new CreateCardAssertions();
const deleteCardActions=new DeleteCardActions();
const deleteCardAssertions=new DeleteCardAssertions();
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
When("Clicks on add a crad button",()=>{
    createCardActions.clickOnAddCardButton()
});
When("Enters title of the card",()=>{
    createCardActions.typeInCardTitleField(cardTitle)
});
When("Clicks on add card button",()=>{
    createCardActions.clickOnAddCardTypedButton()
});
When("Archive the card",()=>{
    deleteCardActions.archiveTheCard()

});
When("Click on the right side menu",()=>{
    deleteCardActions.clickOnMenu()

});
When("Delete the archived item",()=>{
    deleteCardActions.deleteArchivedItem()

});
Then("This card will be deleted",()=>{
    deleteCardAssertions.checkCardIsNotExist()
});

// after(()=>{
//     //sharedUtils.deleteBoard(boardId);
//     cy.get("@boardResponse").then((response)=>{
//         sharedUtils.deleteBoard(response.body.id);

//     });


// });
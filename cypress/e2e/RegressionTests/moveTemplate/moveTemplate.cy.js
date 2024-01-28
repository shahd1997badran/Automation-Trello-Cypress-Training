/// <reference types="cypress" />

import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import CreateTemplateCardActions from "../../../pageObjects/createTemplate/actions.cy";
//import CreateTemplateCardAssertions from "../../../pageObjects/createTemplate/assertions.cy";
import MoveTemplateActions from "../../../pageObjects/moveTemplate/actions.cy";
import MoveTemplateAssertions from "../../../pageObjects/moveTemplate/assertions.cy";
let Random = Math.floor(Math.random()*100);
const boardName ='Shahd Board'+Random;
const templateTitle ='Shahd Template'+Random;
const listTitleToMove= "Done";
const listTitleMoveFrom="To Do";
const sharedUtils= new SharedDataUtils();
const sharedActions= new SharedActions();
const createTemplateCardActions = new CreateTemplateCardActions();
//const createTemplateCardAssertions = new CreateTemplateCardAssertions();
const moveTemplateAssertions =new MoveTemplateAssertions();
const moveTemplateActions =new MoveTemplateActions();
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
When("Clicks on template card icon",()=>{
    createTemplateCardActions.clickOnTemplateCardIcon()
});
When("Clicks on create new template",()=>{
    createTemplateCardActions.clickOnCreateNewTemplate()
});
When("Enters the template title",()=>{
    createTemplateCardActions.enterTemplateTitle(templateTitle)
});
When("Clicks on add button",()=>{
    createTemplateCardActions.clickOnAddButton()

});
When("Clicks on template icon",()=>{
    moveTemplateActions.clickOnTemplateIcon(templateTitle,listTitleMoveFrom)

});
When("Clicks on move option",()=>{
    moveTemplateActions.clickOnMoveOption()

});
When("Choose the list to move",()=>{
    moveTemplateActions.chooseListToMove(listTitleToMove)

});
When("Clicks on move button",()=>{
    moveTemplateActions.clickOnMoveButton()

});
Then("Template is moved",()=>{
    moveTemplateAssertions.checkTemplateCardNewList(templateTitle,listTitleToMove,listTitleMoveFrom)
});

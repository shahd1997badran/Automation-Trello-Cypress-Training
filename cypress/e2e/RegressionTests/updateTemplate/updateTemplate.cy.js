/// <reference types="cypress" />

import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import CreateTemplateCardActions from "../../../pageObjects/createTemplate/actions.cy";
import CreateTemplateCardAssertions from "../../../pageObjects/createTemplate/assertions.cy";
import UpdateTemplateCardActions from "../../../pageObjects/updateTemplate/actions.cy";
let Random = Math.floor(Math.random()*100);
const boardName ='Shahd Board'+Random;
const templateTitle ='Shahd Template'+Random;
const updatedTitle ='Updated Shahd Template'+Random;
const sharedUtils= new SharedDataUtils();
const sharedActions= new SharedActions();
const createTemplateCardActions = new CreateTemplateCardActions();
const createTemplateCardAssertions = new CreateTemplateCardAssertions();
const updateTemplateCardActions = new UpdateTemplateCardActions();
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
When("Clicks on template to update",()=>{
    updateTemplateCardActions.clickOnTemplateUpdateButton()

});
When("Updates the name of template",()=>{
    updateTemplateCardActions.enterUpdatedTitleTemplate(updatedTitle)

});
When("Clicks on save button",()=>{
    updateTemplateCardActions.clickOnSaveButton()

});
Then("Checks the updated template",()=>{
    //updateTemplateCardAssertions.checkTemplateCardIsUpdated()
    createTemplateCardAssertions.checkTemplateCardIsContain(updatedTitle)
});

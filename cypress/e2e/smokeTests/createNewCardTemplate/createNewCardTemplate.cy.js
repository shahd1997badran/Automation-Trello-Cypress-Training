/// <reference types="cypress" />

import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import CreateTemplateCardActions from "../../../pageObjects/createTemplate/actions.cy";
import CreateTemplateCardAssertions from "../../../pageObjects/createTemplate/assertions.cy";
let Random = Math.floor(Math.random()*100);
const boardName ='Shahd Board'+Random;
const templateTitle ='Shahd Template'+Random;
const sharedUtils= new SharedDataUtils();
const sharedActions= new SharedActions();
const createTemplateCardActions = new CreateTemplateCardActions();
const createTemplateCardAssertions = new CreateTemplateCardAssertions();
Before(()=>{
    cy.trelloLogin();
    sharedUtils.createNewBoard(boardName).as('boardResponse');
    
});

Given("The user navigated to the board",()=>{
    cy.get("@boardResponse").then((response)=>{
        cy.log(response);
        sharedActions.openBoard(response.body.url);

    });
});
When("Clicks on template card icon",()=>{
    createTemplateCardActions.clickOnTemplateCardIcon();
});
When("Clicks on create new template",()=>{
    createTemplateCardActions.clickOnCreateNewTemplate();
});
When("Enters the template title",()=>{
    createTemplateCardActions.enterTemplateTitle(templateTitle);
    //cy.pause();
});
When("Clicks on add button",()=>{
    createTemplateCardActions.clickOnAddButton(); 
});
Then("A new template card will be created",()=>{
    createTemplateCardAssertions.checkTemplateCardIsContain(templateTitle)
});

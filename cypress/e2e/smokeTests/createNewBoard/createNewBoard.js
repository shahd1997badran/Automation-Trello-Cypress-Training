/// <reference types="cypress" />

import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import CreateCardActions from "../../../pageObjects/createCard/actions.cy";
import CreateCardAssertions from "../../../pageObjects/createCard/assertions.cy";
let Random = Math.floor(Math.random()*100);
const boardName ='Shahd Board'+Random;
const cardTitle ='Shahd Card'+Random;
const sharedUtils= new SharedDataUtils();
const sharedActions= new SharedActions();
const createCardActions = new CreateCardActions();
const createCardAssertions = new CreateCardAssertions();
let boardId ,boardURL;// let global vriable better than const
Before(()=>{

    
    cy.trelloLogin();
    cy.wait(12000);
    // sharedUtils.createNewBoard(boardName).then((response)=>{
    //     boardURL = response.body.url;
    //     boardId = response.body.id;
        
    // });
    sharedUtils.createNewBoard(boardName).as('boardResponse');

    
});

Given("The user navigated to the board",()=>{
    cy.wait(2000);// static wait
    // api wait is better than static
    // cy.wait(@boardResponse);
    //sharedActions.openBoard(boardURL);
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
Then("A new card will be created",()=>{
    createCardAssertions.checkCardIsExist()
    createCardAssertions.checkCardIsContain(cardTitle)
});

after(()=>{
    //sharedUtils.deleteBoard(boardId);
    cy.get("@boardResponse").then((response)=>{
        sharedUtils.deleteBoard(response.body.id);

    });


});
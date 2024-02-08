import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "../../../pageObjects/loginPage/actions.cy";

const loginPageAction = new LoginPageActions();

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("click on linkedin link", () => {
  loginPageAction.clickOnLinkedInURL();
});

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("click on facebook link", () => {
  loginPageAction.clickOnFacebookURL();
});

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("click on twitter link", () => {
  loginPageAction.clickOnTwitterURL();
});

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("click on youtube link", () => {
  loginPageAction.clickOnYoutubeURL();
});
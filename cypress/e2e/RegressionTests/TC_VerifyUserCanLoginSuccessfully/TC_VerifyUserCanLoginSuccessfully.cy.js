import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "../../../pageObjects/loginPage/actions.cy";
import LoginPageAssertions from "../../../pageObjects/loginPage/assertions.cy";

const baseUrl = Cypress.config('baseUrl');
const loginPageAction = new LoginPageActions();
const loginPageAssertion = new LoginPageAssertions();

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage().loginToWebsite();
});

Then("The user should be redirected to home page", () => {
  loginPageAssertion.checkUrlEqualValue(baseUrl+"/dashboard/index").checkPageTitleContainValue("Dashboard");
});
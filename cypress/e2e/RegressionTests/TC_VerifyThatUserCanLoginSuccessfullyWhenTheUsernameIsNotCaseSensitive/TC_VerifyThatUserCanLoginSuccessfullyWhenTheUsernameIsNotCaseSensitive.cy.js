import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "../../../pageObjects/loginPage/actions.cy";
import LoginPageAssertions from "../../../pageObjects/loginPage/assertions.cy";

const username = "admin";
const password = "admin123";
const baseUrl = Cypress.config('baseUrl');
const loginPageAction = new LoginPageActions();
const loginPageAssertion = new LoginPageAssertions();

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("Fill username in username input field", () => {
  loginPageAction.typeInUsernameInputField(username);
});

When("Fill valid password in password input field", () => {
  loginPageAction.typeInPasswordInputField(password);
});

When("Click on login button", () => {
  loginPageAction.clickOnLoginButton();
});

Then("The user should be redirected to home page", () => {
  loginPageAssertion.checkUrlEqualValue(baseUrl+"/dashboard/index").checkPageTitleContainValue("Dashboard");
});
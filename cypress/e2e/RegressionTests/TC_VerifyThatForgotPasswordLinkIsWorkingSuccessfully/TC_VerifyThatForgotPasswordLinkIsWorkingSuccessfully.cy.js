import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "../../../pageObjects/loginPage/actions.cy";
import LoginPageAssertions from "../../../pageObjects/loginPage/assertions.cy";

const loginPageAction = new LoginPageActions();
const loginPageAssertion = new LoginPageAssertions();
const baseUrl = Cypress.config('baseUrl');

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("click on forgot password link", () => {
  loginPageAction.checkForgotPasswordURL();
});

Then("The user should be redirected to forgot password page", () => {
  loginPageAssertion.checkUrlEqualValue(baseUrl + '/auth/requestPasswordResetCode');
});
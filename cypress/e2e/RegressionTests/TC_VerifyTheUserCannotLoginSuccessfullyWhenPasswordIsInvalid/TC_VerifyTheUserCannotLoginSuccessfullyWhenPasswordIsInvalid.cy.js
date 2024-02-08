import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "../../../pageObjects/loginPage/actions.cy";
import LoginPageAssertions from "../../../pageObjects/loginPage/assertions.cy";

const loginPageAction = new LoginPageActions();
const loginPageAssertion = new LoginPageAssertions();
const username = "Admin";
const password = "Admin123";

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("Fill valid username in username input field", () => {
  loginPageAction.typeInUsernameInputField(username);
});

When("Fill invalid password in password input field", () => {
  loginPageAction.typeInPasswordInputField(password);
});

When("Click on login button", () => {
  loginPageAction.clickOnLoginButton();
});

Then("A validation message appears indicate the credentials are invalid", () => {
  loginPageAssertion.checkInvalidCredentialsMessage();
});
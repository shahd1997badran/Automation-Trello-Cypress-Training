import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "../../../pageObjects/loginPage/actions.cy";
import LoginPageAssertions from "../../../pageObjects/loginPage/assertions.cy";

const loginPageAction = new LoginPageActions();
const loginPageAssertion = new LoginPageAssertions();
const username = "Admin123";
const password = "admin123";

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("Fill invalid username in username input field", () => {
  loginPageAction.typeInUsernameInputField(username);
});

When("Fill password in password input field", () => {
  loginPageAction.typeInPasswordInputField(password);
});

When("Click on login button", () => {
  loginPageAction.clickOnLoginButton();
});

Then("A validation message appears indicate the credentials are invalid", () => {
  loginPageAssertion.checkInvalidCredentialsMessage();
});
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "../../../pageObjects/loginPage/actions.cy";
import LoginPageAssertions from "../../../pageObjects/loginPage/assertions.cy";

const loginPageAction = new LoginPageActions();
const loginPageAssertion = new LoginPageAssertions();

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();

});

When("Click on login button", () => {
  loginPageAction.clickOnLoginButton();
});

Then("A validation message appears on username field", () => {
  loginPageAssertion.checkUserNameInputErrorMesage();
});

Then("A validation message appears on password field", () => {
  loginPageAssertion.checkPasswordInputErrorMesage();
});
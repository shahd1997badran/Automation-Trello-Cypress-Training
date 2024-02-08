import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "../../../pageObjects/loginPage/actions.cy";
import LoginPageAssertions from "../../../pageObjects/loginPage/assertions.cy";

const loginPageAction = new LoginPageActions();
const loginPageAssertion = new LoginPageAssertions();
const orangeHRMUrl = "https://www.orangehrm.com/";

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("click on orange HRM link", () => {
  loginPageAction.clickOnOrangeHRMURL();
});

Then("The user should be redirected to orange HRM page",()=>{
  loginPageAssertion.ckeckOrangeHRMURL(orangeHRMUrl);
})
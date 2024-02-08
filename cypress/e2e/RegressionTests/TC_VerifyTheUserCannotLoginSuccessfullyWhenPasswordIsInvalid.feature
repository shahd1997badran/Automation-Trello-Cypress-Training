Feature: Check login functionality

    Scenario: Verify that the user can't login successfully when password is invalid 
        Given The user navigated to login page
        When Fill valid username in username input field
        And Fill invalid password in password input field 
        And Click on login button
        Then A validation message appears indicate the credentials are invalid
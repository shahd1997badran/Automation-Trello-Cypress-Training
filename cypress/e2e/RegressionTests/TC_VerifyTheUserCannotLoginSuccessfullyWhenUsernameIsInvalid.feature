Feature: Check login functionality

    Scenario: Verify that the user can't login successfully when username is invalid 
        Given The user navigated to login page
        When Fill invalid username in username input field
        And Fill password in password input field
        And Click on login button
        Then A validation message appears indicate the credentials are invalid
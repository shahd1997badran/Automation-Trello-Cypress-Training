Feature: Check login functionality

    The user can't login successfully

    Scenario: Verify that the user can login successfully when the username is not case-sensitive
        Given The user navigated to login page
        When Fill username in username input field
        And Fill valid password in password input field
        And Click on login button
        Then The user should be redirected to home page

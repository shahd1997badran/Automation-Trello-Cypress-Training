Feature: Check login functionality

    Scenario: Verify that a validation message appears when the required fields are empty
        Given The user navigated to login page
        When Click on login button
        Then A validation message appears on username field
        And A validation message appears on password field
Feature: Check login functionality

    Scenario: Verify that forgot password link is working successfully 
        Given The user navigated to login page
        When click on forgot password link
        Then The user should be redirected to forgot password page
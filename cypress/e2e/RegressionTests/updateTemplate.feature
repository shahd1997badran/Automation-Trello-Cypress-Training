Feature: Update Template functionality

    The user should be able to update Template

@focus 
    Scenario:R_4 Verify that the user can update template successfully
        Given The user navigated to the board
        When Clicks on template card icon
        And Clicks on create new template
        And Enters the template title
        And Clicks on add button
        And Clicks on template to update
        And Updates the name of template
        And Clicks on save button
        Then Checks the updated template
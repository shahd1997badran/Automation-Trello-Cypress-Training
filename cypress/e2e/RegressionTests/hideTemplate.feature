Feature: Hide Card Template functionality

    The user should be able to hide Card Template

@focus 
    Scenario:R_6 Verify that the user can hide card template successfully
        Given The user navigated to the board
        When Clicks on template card icon
        And Clicks on create new template
        And Enters the template title
        And Clicks on add button
        And Clicks on template icon
        And Clicks on archive button
        Then Template is hidden
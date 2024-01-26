Feature: Move Card Template functionality

    The user should be able to move Card Template

@focus 
    Scenario:R_5 Verify that the user can move card template successfully
        Given The user navigated to the board
        When Clicks on template card icon
        And Clicks on create new template
        And Enters the template title
        And Clicks on add button
        And Clicks on template icon
        And Clicks on move option
        And Choose the list to move 
        And Clicks on move button
        Then Template is moved 
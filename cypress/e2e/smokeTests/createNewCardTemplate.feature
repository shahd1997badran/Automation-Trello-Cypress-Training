Feature: Create new Card Template functionality

    The user should be able to create new Card Template

@focus 
    Scenario:R_3 Verify that the user can create a new card template successfully
        Given The user navigated to the board
        When Clicks on template card icon
        And Clicks on create new template
        And Enters the template title
        And Clicks on add button
        Then A new template card will be created
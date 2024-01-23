Feature: Create new List functionality

    The user should be able to create new List

@focus 
    Scenario:R_0 Verify that the user can create a new list successfully
        Given The user navigated to the board
        When Clicks on add a nother list
        And Enters title of the list
        And Clicks on add list button 
        Then A new list will be created

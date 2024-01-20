Feature: Create new card functionality

    The user should be able to create new card

@focus 
    Scenario: Verify that the user can create a new card successfully
        Given The user navigated to the board
        When Clicks on add a crad button
        And Enters title of the card
        And Clicks on add card button 
        Then A new card will be created

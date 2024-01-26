Feature:  Delete Existing Card functionality

    The user should be able to  Delete Existing Card

@focus 
    Scenario:R_2 Verify that The user should be able to  Delete Existing Card successfully
        Given The user navigated to the board
        When Clicks on add a crad button
        And Enters title of the card
        And Clicks on add card button 
        And Archive the card
        And Click on the right side menu
        And Delete the archived item
        Then This card will be deleted

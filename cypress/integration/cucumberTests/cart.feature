Feature: Login to cart App

    Scenario: Verify items in the cart
        Given I add four random items to my cart
        When I view my cart
        Then I find total four items listed in my cart
        When I search for lowest price item
        And i am able to remove the lowest price item from my cart
        Then I am able to verify three items in my cart
    
  

Feature: Buy Item Feature 

    Feature Description
@focus 
    Scenario: Buy Item

    Given I open a main page
    Then I validate redirection to the main page
    When I click on the "Samsung galaxy s6" item
    And I validate that a page title is "Samsung galaxy s6"
    And I click the 'Add to cart' button
    And I validate that alert message contains "Product added" and submit
    And I clicked a "Cart" button on the Main Page
    And I click the 'Place Order' button
    And I fill the "Name" text field with "test" as a value
    And I fill the "Country" text field with "test" as a value
    And I fill the "City" text field with "test" as a value
    And I fill the "Credit card" text field with "test" as a value
    And I fill the "Month" text field with "test" as a value
    And I fill the "Year" text field with "test" as a value
    And I click a 'Purchase' button to submit
    Then I validate that a purchase summary page title is "Thank you for your purchase!"
    And I click the 'OK' button on the purchase summary page
    Then I validate redirection to the main page
Feature: SignUp Feature 

    Feature Description
@focus 
    Scenario: Sign Up with a new user

    Given I open a main page
    When I clicked a "Log in" button on the Main Page
    And I type "alex" value in the "username" field
    And I type "alex" value in the "password" field
    And I submit by clicking the login button
    Then I validate that navigation bar contains message "Welcome alex"
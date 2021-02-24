Feature: LogIn Feature 

    Feature Description

    Scenario: Log in with existing user

    Given I open a main page
    Then I validate redirection to the main page
    When I clicked a "Log in" button on the Main Page
    And I type "alex" value in the "username" field
    And I type "alex" value in the "password" field
    And I submit by clicking the login button
    Then I validate that navigation bar contains message "Welcome alex"

    Scenario: Log in with wrong credentials

    Given I open a main page
    Then I validate redirection to the main page
    When I clicked a "Log in" button on the Main Page
    And I type "qwewqeqweqwertytrytrytr" value in the "username" field
    And I type "qwewqeqweqwertytrytrytr" value in the "password" field
    And I submit by clicking the login button
    And I print a message to the console
    Then I validate that alert message contains "User does not exist" and submit
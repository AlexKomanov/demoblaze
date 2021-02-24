Feature: SignUp Feature 

    Feature Description

    Scenario: Sign Up with a new user

    Given I open a main page
    Then I validate redirection to the main page
    When I clicked a "Sign up" button on the Main Page
    And I type autogenerated value in the "username" field
    And I type autogenerated value in the "password" field
    And I submit by clicking the sign up button
    And I print a message to the console
    Then I validate that alert message contains "Sign up successful" and submit

    Scenario: Sign Up with an existing user

    Given I open a main page
    Then I validate redirection to the main page
    When I clicked a "Sign up" button on the Main Page
    And I to sign up with an existing user
    And I submit by clicking the sign up button
    And I print a message to the console
    Then I validate that alert message contains "This user already exist" and submit
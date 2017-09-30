
Feature: Password validation.
  password length should be more than 3 characters.

  Scenario: Password is too short
    Given I wait for the "MainActivity" screen to appear
    When I enter "123" into react input field number 1
    Then I press the enter button
    Then I should see text containing "Invalid password"
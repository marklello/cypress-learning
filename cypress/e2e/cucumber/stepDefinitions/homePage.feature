@home
Feature: Colins site home page navigation validations

    As a user I want to ensure when I navigate to the home page, that the header is displayed

    Scenario Outline: User navigates to Colins site home page - "<viewport>"
    Given I open the Colins site home page in viewport "<viewport>"
    Then I should see the Colins site home page
    Examples:
        | viewport   |
        | iphone-x   |
        | ipad-mini  |
        | macbook-16 | 
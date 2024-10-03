Feature: Colins site home page navigation validations

    Scenario Outline: User navigates to Colins site home page - "<viewport>"
    Given I open the Colins site home page in viewport "<viewport>"
    Then I should see the Colins site home page
    Examples:
        | viewport   |
        | iphone-x   |
        | ipad-mini  |
        | macbook-16 | 
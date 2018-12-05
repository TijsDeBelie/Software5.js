Feature: Login test
    a simple login

    Scenario Outline: successful login
        Given the user is on the web site "http://localhost:8080/login"
        And a user clicks on the username field
        And the user fills in a correct username "<username>"
        And clicks on the password field
        And the user fills in a correct password "<password>"
        And the user clicks on the login button
        Then the user is logged in

    Examples:
    |username  | password |
    |user      | user     |
    |kinepolis | user     |
    |pablo     | designer |

Feature: Login test
    a simple test to login

    Scenario Outline: succesfull login
        Given Browse to the web site "http://localhost:8080/login"
        When a user clicks on the username field
        And the user fills in a correct username "<username>"
        And clicks on the password field
        And the user fills in a correct password "<password>"
        And the user clicks on the login button
        Then the user is logged in

    Examples:
    | username | password |
    | Bril     | Bril     |
    | test     | test     |
    | Tijs     | 1234     |
    | 1234     | Tijs     |
    | @        | ###      |
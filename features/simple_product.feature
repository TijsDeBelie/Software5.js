# features/simple_math.feature
Feature: simple add
  In order to order a product
  As a customer
  I want to see it in a list

  Scenario: simple add
    Given a product set to Bril
    When I add the Bril to the Productlijst
    Then the Productlijst should contain the Bril

  Scenario Outline: first test
    Given a product set to <product>
    When I add the <product> to the <list>
    Then the <list> should contain the <product>
    
    Examples:
      | product | list              |
      | Bril    | Productlijst      |
   


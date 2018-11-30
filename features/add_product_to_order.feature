Feature: add product to order
  Customer wants to order an item

  Scenario Outline: adding product to order
    Given  a product with name "<name>"
    When a customer adds the product <quantity> times to the order
    Then I should see the "<answer>" <quantity> times in my order

  Examples:
    | name  | answer |quantity|
    | Bril  | Bril   |  1     |
    | Beker | Beker  |  5     |
    | Tafel | Tafel  |  3     |
    | Bril  | Bril   |  8     |
    | Tafel | Tafel  |  5     |
    | Tafel | Tafel  |  3000  |
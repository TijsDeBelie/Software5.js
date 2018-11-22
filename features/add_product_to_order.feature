Feature: add product to order
  Customer wants to order an item

  Scenario Outline: adding product to order
    Given  a product with name "<name>"
    When a customer adds the product to the order
    Then I should see the "<answer>" in my order

  Examples:
    | name | answer |
    | Bril | Bril |
    | Beker | Beker |
    | Tafel | Tafel |
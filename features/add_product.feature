Feature: add product to producttable
  an user wants to add a new design

  Scenario Outline: adding new product to products
    Given no product with name "<name>" exists
    When an user adds the new product with name "<name>" and price <price> to the productstable
    Then I should see the "<name>" in my productstable

  Examples:
    | name   |price  |
    | Bril   |100    |
    | Bril1  |5000   |
    | Bril2  |10000  |
    
    
    
 
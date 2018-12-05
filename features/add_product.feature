Feature: add product to producttable
  an user wants to add a new design

  Scenario Outline: adding new product to products
    Given no product with name "<name>" exists
    When an user adds the new product with name "<name>" and price <price> to the productstable
    Then I should see the "<name>" in my productstable

  Examples:
    | name   |price  |
    | Bril1  |500000   |
    | Bril2  |1000000  |
    
    
    
 
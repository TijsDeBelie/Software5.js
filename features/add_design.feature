Feature: add design to designstable
  an user wants to add a new design

  Scenario Outline: adding design to designs
    Given no design with titel "<titel>" exists
    When an user adds the new design with titel "<titel>" and beschrijving "<beschrijving>" and name "<name>" to the designstable'
    Then I should see the "<titel>" in my designstable

  Examples:
    | titel  |beschrijving |name |
    | Bril   |test         |Tijs |
    | Bril1  |test2        |Tijs1|
    | Bril2  |test4        |Tijs |
    
    
    
 
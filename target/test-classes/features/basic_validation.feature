@wip
  #question 1
Feature: basic validation

  Scenario:validate user name
    When  the user send get request with end point users and query param username
    Then status code should be 200
    And User should be able to see  all the information of  delphine

#question 2

    Scenario: validate userId
      When  the user send get request using the userId of Delphine
      Then status code should be 200
      And verify userId of Delphine



#question 3
    Scenario: validate email format
      When the user send get request with end point
      Then status code should be 200
      And   the emails should be in proper format




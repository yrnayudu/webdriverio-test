Feature: Login

  Background:
    Given I'm on the login page

  Scenario: Login with wrong username and password
    When I log in with username 'tests' and password 'testest'
    Then show login error 'User does not exist.'

  Scenario: Login with valid username and invalid password
    When I log in with username 'Yogi' and password 'testest'
    Then show login error 'Incorrect username or password.'

  @RP-123 @smoke @wip @regression
  Scenario: Login with valid user credentials
    When I log in with username 'Yogi' and password 'Test@1234'
    Then show racing page 
    And show user name 'Yogi' on the site
  




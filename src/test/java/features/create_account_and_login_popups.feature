Feature: Login From Health Unlocked Pages
	As a registered HU user
	I want to be able to login
	So that I can enter the site

  @regression 
  Scenario: T101 - login from HU pages
    Given I am on the HU homepage on a desktop
    When I click Log in  
    Then I should be on the login page

	   
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("create_account_and_login_popups.feature");
formatter.feature({
  "line": 1,
  "name": "Login From Health Unlocked Pages",
  "description": "As a registered HU user\nI want to be able to login\nSo that I can enter the site",
  "id": "login-from-health-unlocked-pages",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "T101 - login from HU pages",
  "description": "",
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the HU homepage on a desktop",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_homepage_on_a_desktop()"
});
formatter.result({
  "duration": 23226630033,
  "status": "passed"
});
formatter.step({
  "line": 9,
  "name": "I click Log in",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_click_Log_in()"
});
formatter.result({
  "duration": 72910357,
  "status": "passed"
});
formatter.step({
  "line": 10,
  "name": "I should be on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_should_be_on_the_login_page()"
});
formatter.result({
  "duration": 2014147293,
  "status": "passed"
});
});
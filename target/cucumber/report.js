$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\java\\features\\create_account_and_login_popups.feature");
formatter.feature({
  "id": "login-from-health-unlocked-pages",
  "description": "As a registered HU user\nI want to be able to login\nSo that I can enter the site",
  "name": "Login From Health Unlocked Pages",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages",
  "tags": [
    {
      "name": "@regression",
      "line": 8
    }
  ],
  "description": "",
  "name": "T101 - login from HU pages",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the HU page",
  "keyword": "Given ",
  "line": 10
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click Log in",
  "keyword": "When ",
  "line": 11
});
});
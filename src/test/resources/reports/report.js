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
  "duration": 28884230225,
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
  "duration": 55017899,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.1.0.0.0\u0027]\"}\nCommand duration or timeout: 38 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d27.0, platform\u003dXP, browserConnectionEnabled\u003dtrue, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: fb2878f7-c966-401d-9c64-67edb9a86015\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat PageObjects.Login.loginButton(Login.java:49)\r\n\tat steps.CreateAccountAndLoginPopupsDefs.I_click_Log_in(CreateAccountAndLoginPopupsDefs.java:28)\r\n\tat ✽.When I click Log in(create_account_and_login_popups.feature:9)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.1.0.0.0\u0027]\"}\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous4574269936862173692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8891)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous4574269936862173692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8900)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous4574269936862173692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10844)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous4574269936862173692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10849)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous4574269936862173692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10791)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
});
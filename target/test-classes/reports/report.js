$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("create_account_and_login_popups.feature");
formatter.feature({
  "line": 1,
  "name": "Login From Health Unlocked Pages",
  "description": "As a registered HU user\nI want to be able to login\nSo that I can enter the site",
  "id": "login-from-health-unlocked-pages",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "T101 - login from HU pages",
  "description": "",
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the HU \u003cpage\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click Log in",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be on the login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;",
  "rows": [
    {
      "cells": [
        "page"
      ],
      "line": 14,
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;1"
    },
    {
      "cells": [
        "Homepage"
      ],
      "line": 15,
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;2"
    },
    {
      "cells": [
        "Community_Homepage"
      ],
      "line": 16,
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;3"
    },
    {
      "cells": [
        "Posts_Questions"
      ],
      "line": 17,
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;4"
    },
    {
      "cells": [
        "Polls"
      ],
      "line": 18,
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;5"
    },
    {
      "cells": [
        "Members"
      ],
      "line": 19,
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;6"
    },
    {
      "cells": [
        "Indivdual_Post_Question"
      ],
      "line": 20,
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "T101 - login from HU pages",
  "description": "",
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the HU Homepage",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Homepage",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(String)"
});
formatter.result({
  "duration": 28258028099,
  "status": "passed"
});
formatter.step({
  "line": 11,
  "name": "I click Log in",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_click_Log_in()"
});
formatter.result({
  "duration": 28175664,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.0\u0027]\"}\nCommand duration or timeout: 16 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d27.0, platform\u003dXP, browserConnectionEnabled\u003dtrue, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 64a6bcea-e8c0-40a6-87ca-a87f061fa026\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat PageObjects.Login.loginButton(Login.java:128)\r\n\tat steps.CreateAccountAndLoginPopupsDefs.I_click_Log_in(CreateAccountAndLoginPopupsDefs.java:42)\r\n\tat ✽.When I click Log in(create_account_and_login_popups.feature:11)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.0\u0027]\"}\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8891)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8900)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10844)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10849)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10791)\r\n",
  "status": "failed"
});
formatter.step({
  "line": 12,
  "name": "I should be on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_should_be_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "T101 - login from HU pages",
  "description": "",
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the HU Community_Homepage",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Community_Homepage",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(String)"
});
formatter.result({
  "duration": 1027452897,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nCommand duration or timeout: 15 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d27.0, platform\u003dXP, browserConnectionEnabled\u003dtrue, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 64a6bcea-e8c0-40a6-87ca-a87f061fa026\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat PageObjects.Login.openDirectory(Login.java:50)\r\n\tat steps.CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(CreateAccountAndLoginPopupsDefs.java:24)\r\n\tat ✽.Given I am on the HU Community_Homepage(create_account_and_login_popups.feature:10)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8891)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8900)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10844)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10849)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10791)\r\n",
  "status": "failed"
});
formatter.step({
  "line": 11,
  "name": "I click Log in",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_click_Log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "line": 12,
  "name": "I should be on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_should_be_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "T101 - login from HU pages",
  "description": "",
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the HU Posts_Questions",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Posts_Questions",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(String)"
});
formatter.result({
  "duration": 1043068368,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nCommand duration or timeout: 30 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d27.0, platform\u003dXP, browserConnectionEnabled\u003dtrue, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 64a6bcea-e8c0-40a6-87ca-a87f061fa026\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat PageObjects.Login.openDirectory(Login.java:50)\r\n\tat steps.CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(CreateAccountAndLoginPopupsDefs.java:24)\r\n\tat ✽.Given I am on the HU Posts_Questions(create_account_and_login_popups.feature:10)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8891)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8900)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10844)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10849)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10791)\r\n",
  "status": "failed"
});
formatter.step({
  "line": 11,
  "name": "I click Log in",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_click_Log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "line": 12,
  "name": "I should be on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_should_be_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "T101 - login from HU pages",
  "description": "",
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the HU Polls",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Polls",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(String)"
});
formatter.result({
  "duration": 1041055594,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nCommand duration or timeout: 27 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d27.0, platform\u003dXP, browserConnectionEnabled\u003dtrue, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 64a6bcea-e8c0-40a6-87ca-a87f061fa026\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat PageObjects.Login.openDirectory(Login.java:50)\r\n\tat steps.CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(CreateAccountAndLoginPopupsDefs.java:24)\r\n\tat ✽.Given I am on the HU Polls(create_account_and_login_popups.feature:10)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8891)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8900)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10844)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10849)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10791)\r\n",
  "status": "failed"
});
formatter.step({
  "line": 11,
  "name": "I click Log in",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_click_Log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "line": 12,
  "name": "I should be on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_should_be_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "T101 - login from HU pages",
  "description": "",
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the HU Members",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Members",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(String)"
});
formatter.result({
  "duration": 1150768103,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nCommand duration or timeout: 62 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d27.0, platform\u003dXP, browserConnectionEnabled\u003dtrue, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 64a6bcea-e8c0-40a6-87ca-a87f061fa026\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat PageObjects.Login.openDirectory(Login.java:50)\r\n\tat steps.CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(CreateAccountAndLoginPopupsDefs.java:24)\r\n\tat ✽.Given I am on the HU Members(create_account_and_login_popups.feature:10)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8891)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8900)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10844)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10849)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10791)\r\n",
  "status": "failed"
});
formatter.step({
  "line": 11,
  "name": "I click Log in",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_click_Log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "line": 12,
  "name": "I should be on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_should_be_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "T101 - login from HU pages",
  "description": "",
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the HU Indivdual_Post_Question",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Indivdual_Post_Question",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(String)"
});
formatter.result({
  "duration": 1043165867,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nCommand duration or timeout: 27 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d27.0, platform\u003dXP, browserConnectionEnabled\u003dtrue, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 64a6bcea-e8c0-40a6-87ca-a87f061fa026\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat PageObjects.Login.openDirectory(Login.java:50)\r\n\tat steps.CreateAccountAndLoginPopupsDefs.I_am_on_the_HU_age(CreateAccountAndLoginPopupsDefs.java:24)\r\n\tat ✽.Given I am on the HU Indivdual_Post_Question(create_account_and_login_popups.feature:10)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[data-reactid\u003d\u0027.0.0.1.1\u0027]\"}\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8891)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8900)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10844)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10849)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/TIMO%27K~1/AppData/Local/Temp/anonymous5547505200619852692webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10791)\r\n",
  "status": "failed"
});
formatter.step({
  "line": 11,
  "name": "I click Log in",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefs.I_click_Log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "line": 12,
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
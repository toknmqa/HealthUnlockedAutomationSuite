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
  "duration": 388445049,
  "error_message": "java.lang.NoClassDefFoundError: com/google/common/base/Optional\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.loadCustomExtension(NewProfileExtensionConnection.java:156)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.addWebDriverExtensionIfNeeded(NewProfileExtensionConnection.java:148)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:80)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:112)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:192)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:183)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:96)\r\n\tat helpers.SeleniumFactory.get(SeleniumFactory.java:35)\r\n\tat PageObjects.Login.\u003cinit\u003e(Login.java:31)\r\n\tat steps.CreateAccountAndLoginPopupsDefs.\u003cinit\u003e(CreateAccountAndLoginPopupsDefs.java:15)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:147)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:348)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:272)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:370)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:692)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:646)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:671)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:35)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:483)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n\tat ✽.Given I am on the HU homepage on a desktop(create_account_and_login_popups.feature:8)\r\nCaused by: java.lang.ClassNotFoundException: com.google.common.base.Optional\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:372)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:361)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:360)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.loadCustomExtension(NewProfileExtensionConnection.java:156)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.addWebDriverExtensionIfNeeded(NewProfileExtensionConnection.java:148)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:80)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:112)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:192)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:183)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:96)\r\n\tat helpers.SeleniumFactory.get(SeleniumFactory.java:35)\r\n\tat PageObjects.Login.\u003cinit\u003e(Login.java:31)\r\n\tat steps.CreateAccountAndLoginPopupsDefs.\u003cinit\u003e(CreateAccountAndLoginPopupsDefs.java:15)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:147)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:348)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:272)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:370)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:692)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:646)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:671)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:35)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:483)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
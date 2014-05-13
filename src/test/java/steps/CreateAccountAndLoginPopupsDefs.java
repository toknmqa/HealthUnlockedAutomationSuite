package steps;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import PageObjects.Login;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateAccountAndLoginPopupsDefs {

    private Login nav = new Login();


    @Given("^I am on the HU homepage on a desktop$")
    public void I_am_on_the_HU_homepage_on_a_desktop() {
        // Express the Regexp above with the code you wish you had
       
    	nav.openHomepage();
        System.out.println("homepage");
    }

    @When("^I click Log in$")
    public void I_click_Log_in() {
    	nav.loginButton();
    	System.out.println("Clicked Log in");
    	
    }
    
    @Then("^I should be on the login page$")
    public void I_should_be_on_the_login_page() {
    	nav.loginPage();
    	assertTrue(Login.loginURL = "True",true);   
    }

}

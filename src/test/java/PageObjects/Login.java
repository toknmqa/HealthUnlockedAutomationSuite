package PageObjects;

import static org.junit.Assert.assertTrue;
import helpers.WebPageHelpers;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login extends WebPageHelpers {

	String communityURL;
	public static boolean loginURL;
	WebDriverWait wait;

	// verifies the user is on the login page
	public void loginPage(String page) {
		if (page.equals("Homepage")) {
			assertTrue(getDriver().getCurrentUrl().equals(
					"https://bg-test.www.ppgdes.com/login"));
		} else {
			WebElement modal = getDriver().findElement(
					By.className("modal-content"));

			assertTrue(modal.isDisplayed());
		}
	}
}

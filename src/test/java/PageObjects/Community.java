package PageObjects;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import helpers.WebPageHelpers;

public class Community extends WebPageHelpers {
	WebDriverWait wait;
	String verifyLocation, communityURL;



	public void openPostsQuestions() {

		communityURL = getDriver().getCurrentUrl().toString();
		communityURL = communityURL + "/posts";

		wait = new WebDriverWait(getDriver(), 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.cssSelector("span[data-reactid='.0.2.1.1.0.0.0.1.0']")));
		getDriver().findElement(
				By.cssSelector("span[data-reactid='.0.2.1.1.0.0.0.1.0']"))
				.click();

		String postURL = getDriver().getCurrentUrl().toString();
		assertTrue(postURL.equals(communityURL));

	}

	public void openPolls() {

		communityURL = getDriver().getCurrentUrl().toString();
		communityURL = communityURL + "/polls";

		wait = new WebDriverWait(getDriver(), 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.cssSelector("span[data-reactid='.0.2.1.1.1.0.0.1.0']")));
		getDriver().findElement(
				By.cssSelector("span[data-reactid='.0.2.1.1.1.0.0.1.0']"))
				.click();

		String pollURL = getDriver().getCurrentUrl().toString();

		assertTrue(pollURL.equals(communityURL));

	}

	public void openMembers() {
		communityURL = getDriver().getCurrentUrl().toString();
		communityURL = communityURL + "/members";

		getDriver().findElement(
				By.cssSelector("span[data-reactid='.0.2.1.1.1.1.0.1.0']"))
				.click();

		String pollURL = getDriver().getCurrentUrl().toString();

		assertTrue(pollURL.equals(communityURL));

	}

	public void openIndividualPostQuestion() {

		WebElement postTable = getDriver().findElement(By
				.cssSelector("span[data-reactid=.0.2.1.1.0.0.1']"));
		List<WebElement> arrayPost = postTable.findElements(By.tagName("li"));
		int random = (arrayPost.size() - 1);
		Random rn = new Random();
		int index = rn.nextInt(random);
		WebElement randomPost = arrayPost.get(index).findElement(
				By.className("media-heading"));
		verifyLocation = randomPost.getText();
		randomPost.click();

		wait = new WebDriverWait(getDriver(), 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.cssSelector("h1[data-reactid='.0.3.1.0.2']")));

		String postHeading = getDriver().findElement(
				By.cssSelector("h1[data-reactid='.0.3.1.0.2']")).getText();

		assertTrue(verifyLocation.equals(postHeading));

	}

	public void openCommunityPages(String page) {
		if (page.equals("Posts_Questions")) {
			openPostsQuestions();
			System.out.println(page);
		} else if (page.equals("Polls")) {
			openPolls();
		} else if (page.equals("Members")) {
			openMembers();
		} else if (page.equals("Individual_Post_Question")) {
			openIndividualPostQuestion();
		} else {
			System.out.println(page);
		}

	}
}

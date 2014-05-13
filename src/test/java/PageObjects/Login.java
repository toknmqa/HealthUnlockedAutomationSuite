package PageObjects;

import java.io.File;
import java.io.IOException;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import helpers.SeleniumFactory;
import helpers.WebPageHelpers;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class Login {

    WebDriver driver;
    public static String loginURL;



    public Login() {
        driver = SeleniumFactory.get();
    }

    public void openHomepage() {
        if(driver.getCurrentUrl().equals("https://bg-test.www.ppgdes.com/")) {
            System.out.println("This is the Homepage");
        }else{
        WebPageHelpers.openWebPage("homepage");
        }
        try{
        	Thread.sleep(10000);
        	}
        	catch(InterruptedException iex){
        		iex.toString();
        	}
    }
// Login button home page
    public void loginButton(){
    	WebElement webElement = driver.findElement(By.cssSelector("a[data-reactid='.0.1.0.0.0']"));
    	Actions ac = new Actions(driver);
    	ac.click(webElement);
    	}    
    
    public void loginPage() {
        if(driver.getCurrentUrl().equals("https://bg-test.www.ppgdes.com/login")) {
        	loginURL ="True";
        	System.out.println("Log in Page");
        }else{
        	loginURL ="False";
        }
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException iex){
        		iex.toString();
        	}
    }
    /*
    public Boolean isNewsDropDownItemPresent(String newsItem){
    	WebElement webElement = driver.findElement(By.linkText(newsItem));
    	
    	return webElement != null;
    }*/

    public Boolean verifyNewsDropDownItems(String newsItem) throws Throwable{
    	WebElement webElement = WebPageHelpers.FindElementByCss("img[alt=\"News Section\"]");
    	
    	Actions ac = new Actions (driver);
    	ac.moveToElement(webElement);
    	ac.perform();
    	
    	//WebPageHelpers.waitForElement("dropdown-content daily_informer");
    	
    	WebDriverWait wait = new WebDriverWait(driver, 10);
    	
    	WebElement element = wait.until(
    	        ExpectedConditions.visibilityOfElementLocated(By.className("daily_informer")));

    	
    	try{
    		WebElement dropDownElement = driver.findElement(By.linkText(newsItem));
    		return dropDownElement.isDisplayed();
    	}
    	catch(NoSuchElementException ex){
    		
    		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE); // Can use BASE64 or BYTES as OutputType
    	    FileUtils.copyFile(scrFile, new File("C:\\Users\\Tim O'Keeffe\\Documents\\0001 Sunday Times top level navigation I should see a sub links " + newsItem + ".jpg"));

    		throw ex;
    	}
    	
    }
}

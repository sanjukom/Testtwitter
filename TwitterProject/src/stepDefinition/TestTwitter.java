package stepDefinition;

import java.util.concurrent.TimeUnit;

//import javax.lang.model.element.Element;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
//import java.util.List;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestTwitter {

	public static WebDriver driver;
	
	@Given("^Open googlechrome and start application$")
	public void Open_googlechrome_and_start_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\sanju\\chromedriver_win32\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.twitter.com");
		driver.findElement(By.className("StaticLoggedOutHomePage-buttonLogin")).click();
				
	 }

	@When("^User enters valid username and valid password$")
	public void User_enters_valid_username_and_valid_password() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.className("js-username-field")));
		driver.findElement(By.className("js-username-field")).sendKeys("sanjukom");
		driver.findElement(By.className("js-password-field")).sendKeys("sanju123");
	   
	}

	@Then("^User should be able to login successfully$")
	public void User_should_be_able_to_login_successfully() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='submit']")));
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
	}

	@Given("^User clicks tweet box after login$")
	public void User_clicks_tweet_box_after_login() throws Throwable  {
		driver.findElement(By.id("tweet-box-home-timeline")).click();
	}

	@When("^User composes new tweet within the limit$")
	public void User_composes_new_tweet_within_the_limit() throws Throwable {
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.id("tweet-box-home-timeline")).sendKeys("Test Tweet from selenium");
		driver.findElement(By.xpath(".//button[@class='tweet-action EdgeButton EdgeButton--primary js-tweet-btn']")).click();
	
	}
	
	@Then("^user should be able to tweet successfully$")
	public void user_should_be_able_to_tweet_successfully() throws Throwable {
	    
	}
	
	@When("^User composes new tweet with a image$")
	public void User_composes_new_tweet_with_a_image() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.id("tweet-box-home-timeline")).sendKeys("New Test Tweet from selenium");
		WebElement uploadElement = driver.findElement(By.name("media_empty"));
		uploadElement.sendKeys("C:\\Users\\sanju\\Desktop\\image.jpg");
		driver.findElement(By.xpath(".//button[@class='tweet-action EdgeButton EdgeButton--primary js-tweet-btn']")).click();
	}

	@Given("^User Tweets$")
	public void User_Tweets() throws Throwable {
	    
	}

	@When("^User delete the tweet from dropdown option$")
	public void User_delete_the_tweet_from_dropdown_option() throws Throwable {
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.cssSelector(".js-stream-item.stream-item.stream-item:nth-child(1)  .stream-item-header button.ProfileTweet-actionButton")).click();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@class='dropdown open']//div[@class='dropdown-menu is-autoCentered dropdown-menu--rightAlign']//ul[@role='menu']//li[@class='js-actionDelete']//button[@class='dropdown-link']")).click();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.cssSelector("#delete-tweet-dialog > #delete-tweet-dialog-dialog > .modal-content > .modal-footer > button.delete-action")).click();
		
	}
    
	@Then("^user should be able to delete tweet successfully$")
	public void user_should_be_able_to_delete_tweet_successfully() throws Throwable {
	   
	}
	@Given("^User clicks tweet button after login$")
	public void User_clicks_tweet_button_after_login() throws Throwable {
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.id("global-new-tweet-button")).click();
	    
	}

	@When("^User composes new tweet with a emoji$")
	public void User_composes_new_tweet_with_a_emoji() throws Throwable {
		WebElement modal = driver.findElement(By.id("Tweetstorm-dialog-dialog"));
	    WebElement visibleTweetbox = modal.findElement(By.id("Tweetstorm-tweet-box-0"));
	    driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	    visibleTweetbox.findElement(By.cssSelector(" div.tweet-box-content > div.tweet-content > div.RichEditor.RichEditor--emojiPicker > div.RichEditor-container.u-borderRadiusInherit > div.RichEditor-rightItems.RichEditor-topItems > div > button > span.Icon.Icon--smiley")).click();
	    visibleTweetbox.findElement(By.cssSelector(" div.tweet-box-content > div.tweet-content > div.RichEditor.RichEditor--emojiPicker > div.RichEditor-container.u-borderRadiusInherit > div.RichEditor-rightItems.RichEditor-topItems > div > div > div.EmojiPicker-content.Caret.Caret--stroked.Caret--top > span.EmojiPicker-mainColumn > div.EmojiPicker-scrollableRow > div.EmojiPicker-results > div:nth-child(3) > div > button:nth-child(1)")).click();
	    visibleTweetbox.findElement(By.cssSelector(" div.tweet-box-content > div.TweetBoxToolbar > div.TweetBoxToolbar-tweetButton > span > button.SendTweetsButton.EdgeButton.EdgeButton--primary.EdgeButton--medium.js-send-tweets > span")).click();
	
	}
	
	@Given("^User completed all three tweets after login$")
	public void User_completed_all_three_tweets_after_login() throws Throwable {
	    
	}

	@When("^User click on like button in last tweet$")
	public void User_click_on_like_button_in_last_tweet() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//ol[@id='stream-items-id']//li[1]//div[contains(@class,'ProfileTweet-action ProfileTweet-action--favorite js-toggleState')]//button[1]//div[1]//div[1]")).click();
	    
	}

	@Then("^User should be able to view the like count for the tweet$")
	public void User_should_be_able_to_view_the_like_count_for_the_tweet() throws Throwable {
	    
	}

	@Given("^User clicks on search field$")
	public void User_clicks_on_search_field() throws Throwable {
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	    driver.findElement(By.cssSelector("#search-query")).click();
	    
	}
	@When("^User enters name to be followed$")
	public void User_enters_name_to_be_followed() throws Throwable {
	    driver.findElement(By.cssSelector("#search-query")).sendKeys("sachintendulkar");
	}

	@When("^click on search icon$")
	public void click_on_search_icon() throws Throwable {
		driver.findElement(By.cssSelector("#global-nav-search > span > button")).click();
	}

	@Then("^user should be able to view result$")
	public void user_should_be_able_to_view_result() throws Throwable {
		new WebDriverWait(driver, 120).until((ExpectedCondition<Boolean>) wd ->((JavascriptExecutor) wd).executeScript("return document.location.href").equals("https://twitter.com/search?q=sachintendulkar&src=typd"));
		String url = driver.getCurrentUrl();
		if (url.equals("https://twitter.com/search?q=sachintendulkar&src=typd"))
			System.out.println("results page");
		else
			System.out.println("Not results page");
	    
	}

	@When("^user click on follow button$")
	public void user_click_on_follow_button() throws Throwable {
		
		driver.findElement(By.cssSelector(".follow-text:nth-child(1)")).click();
	  	    
	}

	@Then("^user should be able to follow successfully$")
	public void user_should_be_able_to_follow_successfully() throws Throwable {
	    
	}
	
	@Given("^User again clicks tweet button after login$")
	public void User_again_clicks_tweet_button_after_login() throws Throwable {
		driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
		driver.findElement(By.cssSelector("#global-new-tweet-button > span")).click();
	    
	}

	@When("^User composes new valid tweet$")
	public void User_composes_new_valid_tweet() throws Throwable {
		WebElement modal = driver.findElement(By.id("Tweetstorm-dialog-dialog"));
	    WebElement visibleTweetbox = modal.findElement(By.id("Tweetstorm-tweet-box-0"));
	    driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	    visibleTweetbox.findElement(By.xpath("//div[contains(@class,'RichEditor RichEditor--emojiPicker is-fakeFocus')]//div[contains(@name,'tweet')]")).sendKeys("Hello1");
	    
	}

	@When("^User clicks add another button$")
	public void User_clicks_add_another_button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@id='Tweetstorm-tweet-box-0']//span[contains(@class,'Icon Icon--add Icon--medium')]")).click();
	    
	}

	@When("^User composes another tweet within the limit$")
	public void User_composes_another_tweet_within_the_limit() throws Throwable {
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	    driver.findElement(By.xpath("//*[@id='Tweetstorm-tweet-box-1']/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]")).sendKeys("Hello2");
	}

	@Then("^user should be able to tweet both successfully$")
	public void user_should_be_able_to_tweet_both_successfully() throws Throwable {
	   driver.findElement(By.cssSelector("#Tweetstorm-dialog-dialog > div.modal-content.TweetstormDialog-content.is-thread > div.modal-footer > div > button.SendTweetsButton.EdgeButton.EdgeButton--primary.EdgeButton--medium.js-send-tweets > span")).click();
	}
	@Given("^User already composes a tweet$")
	public void User_already_composes_a_tweet() throws Throwable {
	    
	}

	@When("^User enters new same tweet as before$")
	public void User_enters_new_same_tweet_as_before() throws Throwable {
		driver.findElement(By.id("tweet-box-home-timeline")).click();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.id("tweet-box-home-timeline")).sendKeys("Test Tweet from selenium");
		driver.findElement(By.xpath(".//button[@class='tweet-action EdgeButton EdgeButton--primary js-tweet-btn']")).click();
	}

	@Then("^user should be unable to tweet$")
	public void user_should_be_unable_to_tweet() throws Throwable {
	    
	}

	@Given("^User clicks new tweet box$")
	public void User_clicks_new_tweet_box() throws Throwable {
	    
	}

	@When("^User composes new tweet by exceeding the maximum limit$")
	public void User_composes_new_tweet_by_exceeding_the_maximum_limit() throws Throwable {
		driver.findElement(By.id("tweet-box-home-timeline")).click();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.id("tweet-box-home-timeline")).sendKeys("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\r\n" + 
				"");
		driver.findElement(By.xpath(".//button[@class='tweet-action EdgeButton EdgeButton--primary js-tweet-btn']")).click();
	}

	@Then("^user should be unable tweet$")
	public void user_should_be_unable_tweet() throws Throwable {
	   
	}

	
}

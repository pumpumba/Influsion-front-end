package Selenium;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Random;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class FR1to11Test{
	 WebDriver browser;
	 String username;
	 String password;
	 String startUrl;
	 ChromeOptions options;

	//Run this code to setup the right test eniornmnet 
	@BeforeClass
	public static void setUpTests() throws InterruptedException {
		// /Users/Gustaf/Desktop/SeleniumDrivers/chromedriver
		//Server: chromedriver
		System.setProperty("webdriver.chrome.driver", "chromedriver");	
		
		
//		Map<String, String> mobileEmulation = new HashMap<>();
//		mobileEmulation.put("deviceName", "Nexus 5");
//	
//		options.setExperimentalOption("mobileEmulation", mobileEmulation);	
		
		
	}
	
	@Before
	public void setUpTestEnviornment() throws InterruptedException {
		ChromeOptions options = new ChromeOptions();  
		options.addArguments("--headless");  
		options.addArguments("window-size=360,640");	
		browser = new ChromeDriver(options);
		username="testing12";
		password="testing12";
		startUrl = "http://localhost:8080/";
		browser.get(startUrl);
		Thread.sleep(1000);
	}
	
	@After
	public void endTesting() {
		browser.close();
	}
	
	@Test
	public void FR1() throws InterruptedException {
		
		login(username, password, browser);
		List<WebElement> PopularFeed = browser.findElements(By.cssSelector(".popular-feed-content"));
		System.out.println(PopularFeed.size());
		
		List<WebElement> PopularComponent = browser.findElements(By.className("popular-component-wrapper"));
		assertEquals(100,PopularComponent.size());  
		assertEquals(1,PopularFeed.size());
	}
	

	
//Test Case 2 dived up into 3 test cases to get a better view. At the moment we do only check the first post and see if it works. 
	@Test
	public void FR2_Youtube() throws InterruptedException {
		login(username, password, browser);

		List<WebElement> YoutubeContent =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		
		System.out.println(YoutubeContent.size());
		YoutubeContent.remove(YoutubeContent.size()-1);

		WebElement YoutubePost = YoutubeContent.get(randInt(0, YoutubeContent.size()-1));
		YoutubePost = YoutubePost.findElement(By.xpath(".."));
		System.out.println(YoutubePost.getAttribute("href"));
		
			String videolink = YoutubePost.getAttribute("href");
			((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", YoutubePost);
			((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
			Thread.sleep(1000);			
			YoutubePost.click();
			
			String url = browser.getCurrentUrl();
			
			System.out.println(url);
			assertEquals(url.contains("youtube"),true);
		}
		
	
	@Test
	public void FR2_Twitter() throws InterruptedException {
			
		login(username, password, browser);
		
		List<WebElement> TwitterContent =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		TwitterContent.remove(TwitterContent.size()-1);
		System.out.println(TwitterContent.size());
		WebElement TwitterPost = TwitterContent.get(randInt(0, TwitterContent.size()-1));
		TwitterPost = TwitterPost.findElement(By.xpath(".."));	
		

		String postlink = TwitterPost.getAttribute("href");
		System.out.println(postlink);
		((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", TwitterPost);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
		Thread.sleep(200);
		TwitterPost.click();
		String url = browser.getCurrentUrl();
		System.out.println(url);
		assertEquals(url.contains("twitter"), true);
	}
		
		
	@Test
	public void FR2_Instagram() throws InterruptedException {
		
		login(username, password, browser);
			
		List<WebElement> InstaContent =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		InstaContent.remove(InstaContent.size()-1);
		WebElement InstaPost = InstaContent.get(randInt(0, InstaContent.size()-1));
		InstaPost = InstaPost.findElement(By.xpath(".."));	
//		System.out.println(InstaContent.size());
		
		
		String Instalink = InstaPost.getAttribute("href");
		System.out.println(Instalink);
		((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", InstaPost);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
		Thread.sleep(200);
		InstaPost.click();
		String url = browser.getCurrentUrl();
		System.out.println(url);
		assertEquals(Instalink, url);
			}
		
		
	
	@Test
	public void FR3_instagram() throws InterruptedException {
		
		login(username, password, browser);
		
		Thread.sleep(1000);		
		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		Button.get(Button.size()-1).click();
		
		
		browser.get(startUrl);
		Thread.sleep(1000);
		Thread.sleep(500);
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		
		assertEquals(true, Content.size()>2);	
		
		
	}
	
	@Test
	public void FR3_twitter() throws InterruptedException {
		
		login(username, password, browser);
		
		Thread.sleep(1000);
		
		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		Button.get(Button.size()-1).click();
		
		
		browser.get(startUrl);
		Thread.sleep(500);
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		assertEquals(true, Content.size()>2);	
		
	}
	
	@Test
	public void FR3_youtube() throws InterruptedException {
		
		login(username, password, browser);
		
		Thread.sleep(500);
		
		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		Button.get(Button.size()-1).click();
		
		
		browser.get(startUrl);
		Thread.sleep(500);
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		assertEquals(true,Content.size()>2);
		
	}
	
	@Test
	public void FR4_Twitter() throws InterruptedException {
		
		login(username, password, browser);
		
		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		Button.get(Button.size()-1).click();
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		assertEquals(1, Content.size());
		
	}
	
	@Test
	public void FR4_Instagram() throws InterruptedException {
		
		login(username, password, browser);
		
		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		Button.get(Button.size()-1).click();
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		assertEquals(1, Content.size());
		
	}
	
	@Test
	public void FR4_Youtube() throws InterruptedException {
		
		login(username, password, browser);
		
		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		Button.get(Button.size()-1).click();
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		assertEquals(1, Content.size());
		
	}
	
	
	@Test
	public void FR5_Twitter() throws InterruptedException {
		
		login(username, password, browser);
		
		List<WebElement> ListOfContent =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		int NrOfPostsPlusOne=ListOfContent.size();
		ListOfContent.get(ListOfContent.size()-1).click();
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		assertEquals(Content.size(),1);
		ListOfContent.get(ListOfContent.size()-1).click();
		Content =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		assertEquals(NrOfPostsPlusOne, Content.size());
		
		
	}
	
	@Test
	public void FR5_Youtube() throws InterruptedException {
		
		login(username, password, browser);
		
		List<WebElement> ListOfContent =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		int NrOfPostsPlusOne=ListOfContent.size();
		ListOfContent.get(ListOfContent.size()-1).click();
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		assertEquals(Content.size(),1);
		ListOfContent.get(ListOfContent.size()-1).click();
		Content =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		assertEquals(NrOfPostsPlusOne, Content.size());
		
		
	}
	
	@Test
	public void FR5_Instagram() throws InterruptedException {
		
		login(username, password, browser);
		
		List<WebElement> ListOfContent =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		int NrOfPostsPlusOne=ListOfContent.size();
		ListOfContent.get(ListOfContent.size()-1).click();
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		assertEquals(Content.size(),1);
		ListOfContent.get(ListOfContent.size()-1).click();
		Content =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		assertEquals(NrOfPostsPlusOne, Content.size());
		
		
	}
	
	
	
	@Test
	public void FR6() throws InterruptedException {
		login(username,password,browser);
		browser.get("http://localhost:8080/search");  
		browser.findElement(By.cssSelector("[data-icon='search']")).click();
		browser.findElement(By.className("searchInput")).sendKeys("JustinBieber");
		Thread.sleep(300);
		assertEquals("Justin Bieber",browser.findElement(By.className("search-header")).getText());
		
		browser.get("http://localhost:8080/search");  
		browser.findElement(By.cssSelector("[data-icon='search']")).click();
		browser.findElement(By.className("searchInput")).sendKeys("JoeRogan");
		Thread.sleep(300);
		assertEquals("Joe Rogan",browser.findElement(By.className("search-header")).getText());

		browser.get("http://localhost:8080/search");  
		browser.findElement(By.cssSelector("[data-icon='search']")).click();
		browser.findElement(By.className("searchInput")).sendKeys("Felix Kjellberg");
		Thread.sleep(300);
		assertEquals("Felix Kjellberg",browser.findElement(By.className("search-header")).getText());

		
		
		
	}

	
	
	@Test
	public void FR8() throws InterruptedException {
		browser.get("http://localhost:8080/register");
		Thread.sleep(1000);
		
		int uniqueUserID = randInt(10000, 99999);
		
		browser.findElement(By.cssSelector("[placeholder='Username']")).sendKeys("TestUser" + uniqueUserID);
		browser.findElement(By.cssSelector("[placeholder='Password']")).sendKeys("TestPassword1234");
		browser.findElement(By.cssSelector("[placeholder='Email']")).sendKeys("TestUser"  + uniqueUserID + "@Test.org");
		browser.findElement(By.cssSelector("[placeholder='Age']")).sendKeys("25");
		browser.findElement(By.cssSelector("[name='sex']")).sendKeys("Female");
		
		browser.findElement(By.xpath("//button[contains(text(),'Register')]")).click();
		Thread.sleep(1000);
		browser.findElement(By.xpath("//a[contains(text(),'Log in!')]")).click();
		
		browser.findElement(By.cssSelector("[placeholder='Username']")).sendKeys("TestUser" + uniqueUserID);
		browser.findElement(By.cssSelector("[placeholder='Password']")).sendKeys("TestPassword1234");
		browser.findElement(By.xpath("//button[contains(text(),'Lets go into the wilderness!')]")).click();
		
		Thread.sleep(1000);
		List<WebElement> PopularFeed = browser.findElements(By.cssSelector(".popular-feed-content"));
		List<WebElement> PopularComponent = browser.findElements(By.className("popular-component-wrapper"));
		assertEquals(true, PopularComponent.size()>5);  
		assertEquals(1, PopularFeed.size());
		
		
	}
	
	
	@Test
	public void FR9() throws InterruptedException {
		
		login(username, password, browser);
		Thread.sleep(1000);
		
		List<WebElement> PopularFeed = browser.findElements(By.cssSelector(".popular-feed-content"));
		List<WebElement> PopularComponent = browser.findElements(By.className("popular-component-wrapper"));
		assertEquals(100, PopularComponent.size());  
		assertEquals(1, PopularFeed.size());
				
	}
	
	@Test
	public void FR10() throws InterruptedException {
		
		ArrayList<WebElement> list = new ArrayList<WebElement>();
		list.add((browser.findElement(By.cssSelector("[placeholder='Username']"))));
		list.add(browser.findElement(By.cssSelector("[placeholder='Password']")));
		list.add(browser.findElement(By.xpath("//button[contains(text(),'Lets go into the wilderness!')]")));
		assertEquals(3,list.size());		
		
	}
	

	@Test
	public void FR11() throws InterruptedException {
		login(username, password, browser);
		browser.get("http://localhost:8080/");
		
		Thread.sleep(2000);
		List<WebElement> PopularFeed = browser.findElements(By.cssSelector(".popular-feed-content"));
		List<WebElement> PopularComponent = browser.findElements(By.className("popular-component-wrapper"));
		assertEquals(100, PopularComponent.size());  
		assertEquals(1, PopularFeed.size());
		
		
		
	}
	
	@Test
	public void FR13() throws InterruptedException {
		login(username, password, browser);
		
		
		List<WebElement> PopularComponent = browser.findElements(By.className("popular-component-wrapper"));
		
		//check if follow or not, if not then follow
		if (PopularComponent.get(0).findElement(By.className("fa-heart")).getAttribute("data-state").equals("active")) {
			// already followed
		} else {
			//click the follow button
			PopularComponent.get(0).findElement(By.className("fa-heart")).click();	
		}
		
		PopularComponent.get(0).click();
		Thread.sleep(200);
		String content[] = PopularComponent.get(0).getText().split("\\r?\\n");
		String nameKey = content[0];
		
		//go to follow page'
		browser.findElement(By.className("blur-overlay")).click();
		browser.findElement(By.className("subFooter")).findElement(By.className("fa-heart")).click();
		Thread.sleep(500);

		//see if there are any posts from this influencer
		List<WebElement> FeedComponent = browser.findElements(By.className("feed-component-wrapper"));
		ArrayList<String> names = new ArrayList<String>();

		for (WebElement comp : FeedComponent) {	
			String conten[] = comp.getText().split("\\r?\\n");
			String name = conten[0];
			names.add(name);	
		}
		
		//check if the followed influencer exist in the feed
		assertTrue(names.contains(nameKey));
	}
	
	
	//FR14 check order of posts
	@Test
	public void FR14() throws InterruptedException, ParseException, NoSuchElementException {
		login(username, password, browser);
		
		//go to follow page'
		browser.findElement(By.className("subFooter")).findElement(By.className("fa-heart")).click();
		Thread.sleep(500);
		
		List<WebElement> FeedComponent = browser.findElements(By.className("feed-component-wrapper"));
		ArrayList<Date> timestamps = new ArrayList<Date>();
		boolean correctOrder = true;
		
		for (WebElement comp : FeedComponent) {
			String time = comp.findElement(By.tagName("time")).getAttribute("datetime");	
			String times[] = time.split("T");
			String newtime = times[0] + " " + times [1];
			Date datetime = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").parse(newtime);
			timestamps.add(datetime);	
		}
		
		for (Date date : timestamps) {
			int indx = timestamps.indexOf(date);
			if (indx < timestamps.size()-1) {	
				if (date.compareTo(timestamps.get(indx+1)) < 0) {
					correctOrder = false;
				}	
			}
		}	
		
		assertEquals(true, correctOrder);
	}
	
	
	//FR15 unfollow functionality
	@Test
	public void FR15() throws InterruptedException {
		login(username, password, browser);
		
		List<WebElement> PopularComponent = browser.findElements(By.className("popular-component-wrapper"));
		
		//check if follow or not, if not then follow
		if (PopularComponent.get(0).findElement(By.className("fa-heart")).getAttribute("data-state").equals("active")) {
			//unfollow
			PopularComponent.get(0).findElement(By.className("fa-heart")).click();	
		} else {
			//already not followed
		}
		
		PopularComponent.get(0).click();
		Thread.sleep(200);
		String content[] = PopularComponent.get(0).getText().split("\\r?\\n");
		String nameKey = content[0];
		
		//go to follow page'
		browser.findElement(By.className("blur-overlay")).click();
		browser.findElement(By.className("subFooter")).findElement(By.className("fa-heart")).click();
		Thread.sleep(500);

		//see if there are any posts from this influencer
		List<WebElement> FeedComponent = browser.findElements(By.className("feed-component-wrapper"));
		ArrayList<String> names = new ArrayList<String>();
	
		for (WebElement comp : FeedComponent) {		
			String conten[] = comp.getText().split("\\r?\\n");
			String name = conten[0];
			names.add(name);	
		}
		
		//check if the unfollowed influencer exist in the feed
		assertFalse(names.contains(nameKey));
		
	}
	
	
	//FR16 settings page and functionality
	@Test
	public void FR16() throws InterruptedException {	
		login(username, password, browser);
				
		//go to settings page'
		browser.findElement(By.className("subFooter")).findElement(By.className("fa-cogs")).click();
		Thread.sleep(500);
		
		WebElement settings = browser.findElement(By.tagName("a"));
		String settingsPage = settings.getText();
		
		boolean exists = false;
		
		if (settingsPage.equals("Edit information")) {
			settings.click();
			exists = true;
		}
		
		assertTrue(exists);
	}	
	

	//FR18 Logout
	@Test
	public void FR18() throws InterruptedException {
		login(username, password, browser);
				
		//go to settings page'
		browser.findElement(By.className("subFooter")).findElement(By.className("fa-cogs")).click();
		browser.findElement(By.tagName("button")).click();
		assertTrue(browser.findElements(By.className("login")).size() > 0);

	}
	
	
	@Test
	public void FR35() throws InterruptedException {
		login(username,password,browser);
		browser.findElement(By.cssSelector("[data-icon='search']")).click();
		browser.findElement(By.className("searchInput")).sendKeys("tgtg34t34h");
		Thread.sleep(300);
		assertEquals("No matching influencers",browser.findElement(By.className("search-header")).getText());
		
	}

	
	
	@Test
	public void FR42() throws InterruptedException {
		login(username, password, browser);
		
		List<WebElement> TwitterContent =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		TwitterContent.remove(TwitterContent.size()-1);
		WebElement TwitterPost = TwitterContent.get(randInt(0, TwitterContent.size()-1));
		WebElement thePost = TwitterPost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));	
		thePost = thePost.findElement(By.xpath(".."));	

		
//		List<WebElement> PopularComponent = browser.findElements(By.className("popular-component-wrapper"));
//		WebElement thePost = PopularComponent.get(randInt(0,PopularComponent.size()));
		
		((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", thePost);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
		thePost.click();
		WebElement theHeader = browser.findElement(By.className("header"));
		List<WebElement> theName = thePost.findElements(By.tagName("a"));
		theName.get(1).click();
		Thread.sleep(1300);

		
		List<WebElement> FeedComponent = browser.findElements(By.className("feed-component-wrapper"));
		assertEquals(true, FeedComponent.size()>0);
		
		
	}
	
	
	@Test
	public void PR1() {
		boolean loadingcheck=false;
	
	long start = System.currentTimeMillis();

	browser.get("http://localhost:8080/");  

	long finish = System.currentTimeMillis();
	Long loadtime = (Long)((JavascriptExecutor)browser).executeScript("return performance.timing.loadEventEnd - performance.timing.navigationStart;");
	if (loadtime<=2000) {
		loadingcheck=true;
		
	}
	assertEquals(true,loadingcheck);
	
	

	}
	
	@Test
	public void PR2() throws InterruptedException {
		boolean responsecheck=false;
		
		

	browser.get("http://localhost:8080/");
	login(username, password, browser);
	Thread.sleep(1000);
	
	List<WebElement> PopularComponent = browser.findElements(By.className("popular-component-wrapper"));
	
	long start = System.currentTimeMillis();
	
	PopularComponent.get(0).click();
	List<WebElement> Component = browser.findElements(By.className("content-container"));
	

	long finish = System.currentTimeMillis();
	long responsetime = finish-start;
	if (responsetime<=2000) {
		responsecheck=true;
		
	}

	assertEquals(true,responsecheck);

	}

	
	

	public static int randInt(int min, int max) {
	    Random rand = new Random();
	    int randomNum = rand.nextInt((max - min) + 1) + min;
	    return randomNum;
	}
	
	public static void login(String username, String password, WebDriver browser) throws InterruptedException {
		browser.findElement(By.cssSelector("[placeholder='Username']")).sendKeys(username);
		browser.findElement(By.cssSelector("[placeholder='Password']")).sendKeys(password);
		browser.findElement(By.xpath("//button[contains(text(),'Lets go into the wilderness!')]")).click();
		Thread.sleep(1000);
	}
	
	


	


}

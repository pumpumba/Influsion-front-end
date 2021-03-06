package Selenium;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
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
		options.addArguments("window-size=375,812");	
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
		assertEquals(true,PopularComponent.size()>9);  
		assertEquals(1,PopularFeed.size());
	}
	

	
//Test Case 2 dived up into 3 test cases to get a better view. At the moment we do only check the first post and see if it works. 
	@Test
	public void FR2_Youtube() throws InterruptedException {
		login(username, password, browser);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);

		List<WebElement> YoutubeContent =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		
		System.out.println(YoutubeContent.size());
		YoutubeContent.remove(YoutubeContent.size()-1);
		Thread.sleep(500);			

		WebElement YoutubePost = YoutubeContent.get(randInt(0, YoutubeContent.size()-1));
		YoutubePost = YoutubePost.findElement(By.xpath(".."));
		System.out.println(YoutubePost.getAttribute("href"));
		
			String videolink = YoutubePost.getAttribute("href");
			((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", YoutubePost);
			((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
			Thread.sleep(1000);			
			YoutubePost.click();
			Thread.sleep(500);			
			String url = browser.getCurrentUrl();
			
			System.out.println(url);
			assertEquals(url.contains("youtube"),true);
		}
		
	
	@Test
	public void FR2_Twitter() throws InterruptedException {
			
		login(username, password, browser);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		
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
		Thread.sleep(500);			
		String url = browser.getCurrentUrl();
		System.out.println(url);
		assertEquals(url.contains("twitter"), true);
	}
		
		
	@Test
	public void FR2_Instagram() throws InterruptedException {
		
		login(username, password, browser);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
			
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
		Thread.sleep(500);			
		String url = browser.getCurrentUrl();
		System.out.println(url);
		assertEquals(Instalink, url);
			}
		
		
	
	@Test
	public void FR3_instagram() throws InterruptedException {
		
		login(username, password, browser);
		
	
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);

		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		
		Button.get(Button.size()-1).click();
		
		
		browser.get(startUrl);
		Thread.sleep(500);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='instagram']"));

		
		
		assertEquals(true, Content.size()>=2);	
		
		
	}
	
	@Test
	public void FR3_twitter() throws InterruptedException {
		
		login(username, password, browser);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500);
		
		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		Button.get(Button.size()-1).click();
		
		
		browser.get(startUrl);
		Thread.sleep(500);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		assertEquals(true, Content.size()>=2);	
		
	}
	
	@Test
	public void FR3_youtube() throws InterruptedException {
		
		login(username, password, browser);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500);

		
		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		Button.get(Button.size()-1).click();
		
		
		
		browser.get(startUrl);
		Thread.sleep(500);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		assertEquals(true,Content.size()>=2);
		
	}
	
//	@Test
//	public void FR4_Twitter() throws InterruptedException {
//		
//		login(username, password, browser);
//
//		
//		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='twitter']"));
//		Button.get(Button.size()-1).click();
//		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='twitter']"));
//		List<WebElement> ContentProm =browser.findElements(By.cssSelector("[data-ispromoted='true']"));
//		assertEquals(1, Content.size()-ContentProm.size());
//		
//	}
//	
//	@Test
//	public void FR4_Instagram() throws InterruptedException {
//		
//		login(username, password, browser);
//		
//		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='instagram']"));
//		Button.get(Button.size()-1).click();
//		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='instagram']"));
//		
//		
//	}
//	
//	@Test
//	public void FR4_Youtube() throws InterruptedException {
//		
//		login(username, password, browser);
//		
//		List<WebElement> Button =browser.findElements(By.cssSelector("[data-icon='youtube']"));
//		Button.get(Button.size()-1).click();
//		List<WebElement> Content =browser.findElements(By.cssSelector("[data-icon='youtube']"));
//		assertEquals(1, Content.size());
//		
//	}
//	
//	
	@Test
	public void FR5_Twitter() throws InterruptedException {
		
		login(username, password, browser);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500)
		;
		
		List<WebElement> ListOfContent =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		int NrOfPostsPlusOne=ListOfContent.size();
		ListOfContent.get(ListOfContent.size()-1).click();
		
		Thread.sleep(1000);
		
		ListOfContent.get(ListOfContent.size()-1).click();
		
		List<WebElement> List2 =browser.findElements(By.cssSelector("[data-icon='twitter']"));
		assertEquals(true, List2.size()>=2);
		

		
		
	}
	
	@Test
	public void FR5_Youtube() throws InterruptedException {
		
		login(username, password, browser);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500)
		;
		
		List<WebElement> ListOfContent =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		int NrOfPostsPlusOne=ListOfContent.size();
		ListOfContent.get(ListOfContent.size()-1).click();
		
		Thread.sleep(1000);
		
		ListOfContent.get(ListOfContent.size()-1).click();
		
		List<WebElement> List2 =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		assertEquals(true, List2.size()>=2);
		
		
		
	}
	
	@Test
	public void FR5_Instagram() throws InterruptedException {
		
		login(username, password, browser);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500)
		;
		
		List<WebElement> ListOfContent =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		int NrOfPostsPlusOne=ListOfContent.size();
		ListOfContent.get(ListOfContent.size()-1).click();
		
		Thread.sleep(1000);
		
		ListOfContent.get(ListOfContent.size()-1).click();
		
		List<WebElement> List2 =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		assertEquals(true, List2.size()>=2);
		
		
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
		browser.findElement(By.xpath("//a[contains(text(),'OK!')]")).click();
		
//		browser.findElement(By.cssSelector("[placeholder='Username']")).sendKeys("TestUser" + uniqueUserID);
//		browser.findElement(By.cssSelector("[placeholder='Password']")).sendKeys("TestPassword1234");
//		browser.findElement(By.xpath("//button[contains(text(),'Lets go into the wilderness!')]")).click();
		
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
		assertEquals(true, PopularComponent.size()>9);  
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
		assertEquals(true, PopularComponent.size()>9);  
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
		browser.get("http://localhost:8080/");
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
//	@Test
//	public void FR14() throws InterruptedException, ParseException, NoSuchElementException {
//		login(username, password, browser);
//		
//		//go to follow page'
//		browser.findElement(By.className("subFooter")).findElement(By.className("fa-heart")).click();
//		Thread.sleep(500);
//		
//		List<WebElement> FeedComponent = browser.findElements(By.className("feed-component-wrapper"));
//		ArrayList<Date> timestamps = new ArrayList<Date>();
//		boolean correctOrder = true;
//		
//		for (WebElement comp : FeedComponent) {
//			String time = comp.findElement(By.tagName("time")).getAttribute("datetime");	
//			String times[] = time.split("T");
//			String newtime = times[0] + " " + times [1];
//			Date datetime = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").parse(newtime);
//			timestamps.add(datetime);	
//		}
//		
//		for (Date date : timestamps) {
//			int indx = timestamps.indexOf(date);
//			if (indx < timestamps.size()-1) {	
//				if (date.compareTo(timestamps.get(indx+1)) < 0) {
//					correctOrder = false;
//				}	
//			}
//		}	
//		
//		assertEquals(true, correctOrder);
//	}
//	
	
	//FR15 unfollow functionality
	@Test
	public void FR15() throws InterruptedException {
		login(username,password,browser);
			
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
		browser.get("http://localhost:8080/");
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
	public void FR23() throws InterruptedException {	
		
		ChromeOptions options = new ChromeOptions();  
		options.addArguments("--headless");  	
		ChromeDriver browserWeb = new ChromeDriver(options);
		browserWeb.get(startUrl + "admin");
		Thread.sleep(1000);
		adminLogin("admin", "1234", browserWeb);
		boolean checker=false;
		
		try {
		
		browserWeb.findElement(By.className("promote-tab")).click();
		
		
		WebElement blockDiv = browserWeb.findElement(By.className("admin-block-content"));	
		((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", blockDiv);
		((JavascriptExecutor) browserWeb).executeScript("window.scrollBy(0,-100)","");
		
		WebElement searchField = blockDiv.findElement(By.className("searchInput"));
		searchField.sendKeys("Mattias Hargin");
		
		WebElement searchheader = blockDiv.findElement(By.className("search-header"));
		browserWeb.findElement(By.className("blockButton")).click();
		
		
		
		
		
		browserWeb.get(startUrl + "admin");
		Thread.sleep(1000);
		browserWeb.findElement(By.className("promote-tab")).click();
		Thread.sleep(1000);
		
		WebElement blockedbox = browserWeb.findElement(By.className("blocked-box"));	
		((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", blockedbox);
		((JavascriptExecutor) browserWeb).executeScript("window.scrollBy(0,-100)","");
		

		
		checker=true;
		browserWeb.close();
		
		} catch(Exception e) {
			checker=false;
		}
		assertEquals(true, checker);
		
		
		
	}
	
	@Test
	public void FR24() throws InterruptedException {
		
		 login(username, password, browser);
		 Thread.sleep(1000);
		

		browser.findElement(By.className("fa-search")).click();
		WebElement Searchexp = browser.findElement(By.className("info-text"));	
		assertEquals(Searchexp.getText().substring(0,7) ,"Welcome");	
	}
	
	
	@Test
    public void FR26() throws InterruptedException {
       ChromeOptions options = new ChromeOptions();
       options.addArguments("--headless");
       ChromeDriver browserWeb = new ChromeDriver(options);
       browserWeb.get(startUrl + "admin");
       adminLogin("admin", "1234", browserWeb);
       
       browserWeb.findElement(By.className("ad-tab")).click();
		
        //browser.findElement(By.className("admin-log-out")).click();
        List<WebElement> adlist = browser.findElements(By.className("ad-list-component"));
        //List<WebElement>  deletelist = adlist.get(2).findElements(By.tagName("span"));        

        String Clicks = "";
        //boolean correctMeta=true;
        

        for (WebElement data : adlist) {
            List<WebElement>  list = data.findElements(By.tagName("span"));
            for(WebElement li : list) {
                if (li.getAttribute("title").equals("Total amount of clicks on ad")) {

                Clicks = li.getText();
                System.out.println("sss"+Clicks);
                assertNotNull(Clicks);
            }
            }
            

        }
        
        browserWeb.close();
        
    }
	
	@Test
	public void FR27() throws InterruptedException {
		 login(username, password, browser);
		browser.findElement(By.className("fa-star")).click();
		try {
			Thread.sleep(300);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		List<WebElement> filterButtons = browser.findElement(By.className("filter")).findElements(By.tagName("svg"));

		for (WebElement filterButton : filterButtons) {

			if (filterButton.getAttribute("data-icon").equals("instagram") ||

				filterButton.getAttribute("data-icon").equals("youtube")) {

				if (filterButton.getAttribute("data-state").equals("active")) {

					filterButton.click();

				}

			}

		}

		List<WebElement> instaContent = browser.findElements(By.className("popular-component-wrapper"));

		instaContent.get(0).click();

		Thread.sleep(300);


		WebElement metaData = instaContent.get(0).findElement(By.className("meta-data"));

		List<WebElement> metaDataTypes = metaData.findElements(By.tagName("span"));
 

		String likes = "";

		String date = "";

		String retweets = "";

		String comments = "";

		String hashtags = "";

				
		for (WebElement data : metaDataTypes) {

			if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("thumbs-up")) {

				likes = data.getText();

			} else if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("calendar-alt")) {

				date = data.getText();

			} //else if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("retweet")) {

				//retweets = data.getText();

		//	} else if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("comments")) {

				//comments = data.getText();

		//	}	

			//where will the hashtags be shown?
					
		}	
		boolean correctMeta = true;	

		//likes

		if (!(Integer.parseInt(likes) >= 0)) {

			correctMeta = false;
		}
		//date
		if (date == null || date.equals("")) {

			correctMeta = false;

		}		

		//comments

	//	if (!(Integer.parseInt(comments) >= 0)) {

	//		correctMeta = false;

	//	}

		//retweets

	//	if (!(Integer.parseInt(retweets) >= 0)) {

	//		correctMeta = false;

	//	}
		//verify that there are hashtags
		assertTrue(correctMeta);	
	}
	
	
	//FR28 twitter post content
	@Test
	public void FR28() throws InterruptedException {
		login(username,password,browser);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(500);
		
		List<WebElement> youtubeContent =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		youtubeContent.remove(youtubeContent.size()-1);
		WebElement TwitterPost = youtubeContent.get(randInt(0, youtubeContent.size()-1));
		WebElement thePost = TwitterPost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));	
		thePost = thePost.findElement(By.xpath(".."));	
		((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", thePost);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
		thePost.click();

			Thread.sleep(1000);


		WebElement expand = thePost.findElement(By.className("expanded-view"));
		//name

		String name = expand.findElement(By.xpath(".//a[@class='header']")).getText();

		//text

		String text = expand.findElement(By.className("content-container")).findElement(By.tagName("p")).getText();

		//img

		String imgsrc = expand.findElement(By.className("content-container")).findElement(By.tagName("img")).getAttribute("src");	

		//verified account (tag?)	

		boolean correctContent = true;	

		if (name.equals(null)) {

			correctContent = false;

		}

		if (text.equals(null)&&imgsrc.equals(null)) {

			correctContent = false;

		}
		//verified account (tag?
		assertTrue(correctContent);		
	}
	
	@Test
	public void FR29() throws InterruptedException {
		login(username,password,browser);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		
		List<WebElement> youtubeContent =browser.findElements(By.cssSelector("[data-icon='youtube']"));
		youtubeContent.remove(youtubeContent.size()-1);
		WebElement TwitterPost = youtubeContent.get(randInt(0, youtubeContent.size()-1));
		WebElement thePost = TwitterPost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));	
		thePost = thePost.findElement(By.xpath(".."));	
		((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", thePost);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
		thePost.click();

			Thread.sleep(1000);


		WebElement expand = thePost.findElement(By.className("expanded-view"));

		//name

		String name = expand.findElement(By.xpath(".//a[@class='header']")).getText();

		//video

		String videosrc = expand.findElement(By.className("content-container")).findElement(By.tagName("iframe")).getAttribute("src");

		//text

		String text = expand.findElement(By.className("content-container")).findElement(By.tagName("p")).getText();

		//verified account

		//username

		

		boolean correctContent = true;

		

		if (name.equals(null)) {

			correctContent = false;

		}

		if (text.equals(null)) {

			correctContent = false;

		}

		if (videosrc.equals(null)) {

			correctContent = false;

		}

		//username

		//verified account (tag?)

		

		assertTrue(correctContent);		

	}
	
	@Test
	public void FR30() throws InterruptedException {
	login(username,password,browser);
	
	((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
	Thread.sleep(200);		
	((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
	Thread.sleep(200);
	((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
	Thread.sleep(200);
	
	List<WebElement> youtubeContent =browser.findElements(By.cssSelector("[data-icon='youtube']"));
	youtubeContent.remove(youtubeContent.size()-1);
	WebElement TwitterPost = youtubeContent.get(randInt(0, youtubeContent.size()-1));
	WebElement thePost = TwitterPost.findElement(By.xpath(".."));
	thePost = thePost.findElement(By.xpath(".."));
	thePost = thePost.findElement(By.xpath(".."));	
	thePost = thePost.findElement(By.xpath(".."));	
	((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", thePost);
	((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
	thePost.click();

		Thread.sleep(1000);

		

		WebElement metaData = thePost.findElement(By.className("meta-data"));

		List<WebElement> metaDataTypes = metaData.findElements(By.tagName("span"));

		 

		String likes = "";

		String date = "";

		String comments = "";

		String hashtags = "";

		

		//where will the hashtags be shown?

		

		for (WebElement data : metaDataTypes) {

			if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("thumbs-up")) {

				likes = data.getText();
				//System.out.println(likes);

			} else if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("calendar-alt")) {

				date = data.getText();
				//System.out.println(data);

			} //else if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("comments")) {

		//		comments = data.getText();

		//	} 

		}

		

		boolean correctMeta = true;

		

		//likes

		if (!(Integer.parseInt(likes) >= 0)) {

			correctMeta = false;

		}

		//date

		if (date == null) {

			correctMeta = false;

		}

		

	//comments

	//	if (!(Integer.parseInt(comments) >= 0)) {

	//		correctMeta = false;

	//	}

	//verify that there are hashtags

		

		assertTrue(correctMeta);	

	}
	
	@Test
	public void FR31() throws InterruptedException {
		login(username,password,browser);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		
		List<WebElement> instaContent =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		instaContent.remove(instaContent.size()-1);
		WebElement instaPost = instaContent.get(randInt(0, instaContent.size()-1));
		WebElement thePost = instaPost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));	
		thePost = thePost.findElement(By.xpath(".."));	
		((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", thePost);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
		thePost.click();

			Thread.sleep(1000);


		WebElement expand = thePost.findElement(By.className("expanded-view"));

		

		//name

		String name = expand.findElement(By.xpath(".//a[@class='header']")).getText();

		//img

//		String imgsrc = expand.findElement(By.className("content-container")).findElement(By.tagName("img")).getAttribute("src");

		//text

		String text = expand.findElement(By.className("content-container")).findElement(By.tagName("p")).getText();

		//verified account

		//username

		

		boolean correctContent = true;

		

		if (name.equals(null)) {

			correctContent = false;

		}

		if (text.equals(null)) {

			correctContent = false;

		}

//		if (imgsrc.equals(null)) {
//
//			correctContent = false;
//
//		}

		//username

		//verified account (tag?)

		

		assertTrue(correctContent);		

	}
	
	@Test
	public void FR32() throws InterruptedException {	
		login(username,password,browser);
		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);		
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
		Thread.sleep(200);
		
		List<WebElement> instaContent =browser.findElements(By.cssSelector("[data-icon='instagram']"));
		instaContent.remove(instaContent.size()-1);
		WebElement instaPost = instaContent.get(randInt(0, instaContent.size()-1));
		WebElement thePost = instaPost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));
		thePost = thePost.findElement(By.xpath(".."));	
		thePost = thePost.findElement(By.xpath(".."));	
		((JavascriptExecutor) browser).executeScript("arguments[0].scrollIntoView(true);", thePost);
		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,-100)","");
		thePost.click();

			Thread.sleep(200);


		

		WebElement metaData = browser.findElement(By.className("meta-data"));

		List<WebElement> metaDataTypes = metaData.findElements(By.tagName("span"));

		 

		String likes = "";

		String date = "";

		String comments = "";

		String hashtags = "";

		

		//where will the hashtags be shown?

		

		for (WebElement data : metaDataTypes) {

			if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("thumbs-up")) {

				likes = data.getText();
				System.out.println(likes);

			} else if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("calendar-alt")) {

				date = data.getText();
				System.out.println(date);

			} //else if (data.findElement(By.tagName("svg")).getAttribute("data-icon").equals("comments")) {

		//		comments = data.getText();

		//	} 

		}

		

		boolean correctMeta = true;

		

		//likes

		if (!(Integer.parseInt(likes) >= 0)) {

			correctMeta = false;

		}

		//date

		if (date == null) {

			correctMeta = false;

		}

		

	//comments

	//	if (!(Integer.parseInt(comments) >= 0)) {

	//		correctMeta = false;

	//	}

	//verify that there are hashtags

			

		assertTrue(correctMeta);	

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
	public void FR37() throws InterruptedException {		
		login(username,password,browser);
		logout(browser);
		browser.get("http://localhost:8080/admin");
		adminLogin("admin", "1234", browser);
		String titleText = browser.findElement(By.className("admin-title")).getText();
		String content[] = titleText.split("\\r?\\n");
		String title = content[0];
		assertEquals("inFlusion: Admin", title);
		
	}
	
	//FR38 Admin stays logged in
		@Test
		public void FR38() throws InterruptedException {		
			login(username,password,browser);
			logout(browser);
			browser.get("http://localhost:8080/admin");
			adminLogin("admin", "1234", browser);
			browser.get("http://localhost:8080/admin");

			String titleText = browser.findElement(By.className("admin-title")).getText();
			String content[] = titleText.split("\\r?\\n");
			String title = content[0];
			assertEquals("inFlusion: Admin", title);
			
		}
		
		//FR40 logout admin
		@Test
		public void FR40() throws InterruptedException {		
			login(username,password,browser);	
			logout(browser);
			browser.get("http://localhost:8080/admin");
			adminLogin("admin", "1234", browser);
			
			
			browser.findElement(By.className("admin-log-out")).click();
			Thread.sleep(1000);
			
			ArrayList<String> texts = new ArrayList<String>();

			String text = browser.findElement(By.className("admin-login-container")).getText();
			String content[] = text.split("\\r?\\n");
			for (String s : content) {
				texts.add(s);
			}
			assertTrue(texts.contains("Admin Login"));
			
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
	 public void FR44o45o46o47o63() throws InterruptedException {

		        ChromeOptions options = new ChromeOptions();
		       options.addArguments("--headless");
		       ChromeDriver browserWeb = new ChromeDriver(options);
		       browserWeb.get(startUrl + "admin");
		       adminLogin("admin", "1234", browserWeb);

		        String imgsrc="https://i.imgur.com/7EbnoBp.jpg";
		        String title="cocacola"+ randInt(1000,100000) + "GGGGG";
		        String text="cocacola123";
		        
		       browserWeb.findElement(By.className("ad-tab")).click();

		       WebElement adContainer = browserWeb.findElement(By.className("create-ad-container"));
		       WebElement titleinput = adContainer.findElement(By.xpath(".//form[@class='white-form']/input[@class='ad-username']"));
		       titleinput.sendKeys(title);
		       WebElement imginput = adContainer.findElement(By.xpath(".//form[@class='white-form']/input[@class='ad-picture-input']"));
		       imginput.sendKeys(imgsrc);
		       WebElement contentinput = adContainer.findElement(By.xpath(".//form[@class='white-form']/textarea[@class='ad-content-text']"));
		       ((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", contentinput);
		       contentinput.sendKeys(text);
		       WebElement feedinput = adContainer.findElement(By.className("on-popular-feed-box"));
		       ((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", feedinput);
		       feedinput.click();
		       adContainer.findElement(By.className("white-button")).click();
		        Thread.sleep(200);
		       browserWeb.get(startUrl + "admin");
		       browserWeb.findElement(By.className("ad-tab")).click();
		        Thread.sleep(1000);
		       List<WebElement> ads = browserWeb.findElements(By.className("ad-list-component"));

		       System.out.println(ads.size());
		       for (WebElement ad : ads) {
		           ((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", ad);
		           Thread.sleep(500);
		       
		           if (ad.findElement(By.xpath(".//span[1]")).getText().equals(title)) {
		        	   Thread.sleep(1000);
		        	   ad.findElement(By.className("fa-trash")).click();
		             //  ad.findElement(By.xpath(".//span[4]")).click();
		               Thread.sleep(1000);
		               break;
		           //    ads.remove(ads.size()-1);
		               
		          //     System.out.println(ad.getText());

		           }
		       }
		       System.out.println(ads.size());

		       browserWeb.get(startUrl + "admin");
		       Thread.sleep(500);
		       browserWeb.findElement(By.className("ad-tab")).click();
		        Thread.sleep(1000);
		       List<WebElement> adsNew = browserWeb.findElements(By.className("ad-list-component"));
		       ArrayList<String> adtitles = new ArrayList<String>();
		       for (WebElement ad : adsNew) {
		           ((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", ad);
		           Thread.sleep(200);
		           adtitles.add(ad.findElement(By.xpath(".//span[1]")).getText());
		       }

		       System.out.println(adsNew.size());
		       browserWeb.close();
		       assertEquals(false, adtitles.contains(title));

		    }
		

	@Test
	public void FR48() throws InterruptedException {	
		
		ChromeOptions options = new ChromeOptions();  
		options.addArguments("--headless");  	
		ChromeDriver browserWeb = new ChromeDriver(options);
		browserWeb.get(startUrl + "admin");
		Thread.sleep(1000);
		adminLogin("admin", "1234", browserWeb);
		Thread.sleep(1000);
		
		WebElement blockDiv = browserWeb.findElement(By.xpath("//div[contains(@class,'-most-clicked')]"));
				
		((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", blockDiv);
		((JavascriptExecutor) browserWeb).executeScript("window.scrollBy(0,-100)","");
		
		List<WebElement> listElements = blockDiv.findElements(By.className("influencer-list-component"));
		

		browserWeb.close();
		assertEquals(10, listElements.size());
		
		
		
	}
	
	@Test
	public void FR50() throws InterruptedException {	
		
		ChromeOptions options = new ChromeOptions();  
		options.addArguments("--headless");  	
		ChromeDriver browserWeb = new ChromeDriver(options);
		browserWeb.get(startUrl + "admin");
		Thread.sleep(1000);
		adminLogin("admin", "1234", browserWeb);
		Thread.sleep(1000);
		
		WebElement blockDiv = browserWeb.findElement(By.xpath("//div[contains(@class,'-most-followed')]"));
				
		((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", blockDiv);
		((JavascriptExecutor) browserWeb).executeScript("window.scrollBy(0,-100)","");
		
		List<WebElement> listElements = blockDiv.findElements(By.className("influencer-list-component"));

		browserWeb.close();
		assertEquals(10, listElements.size());
		
		
		
		
	}
	
//	@Test
//    public void FR55() throws InterruptedException {
//		login(username,password,browser);
//		
//		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
//		Thread.sleep(200);		
//		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
//		Thread.sleep(200);
//		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
//		Thread.sleep(200);
//		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
//		Thread.sleep(200);		
//		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
//		Thread.sleep(200);
//		((JavascriptExecutor) browser).executeScript("window.scrollBy(0,10000)","");
//		Thread.sleep(200);
//    
//        List<WebElement> adList= browser.findElements(By.className("fa-ad"));
//        List<WebElement> List= browser.findElements(By.className("popular-component-wrapper"));
//        System.out.println(adList.size());
//        System.out.println(List.size());
//        
//        int num = List.size()/adList.size();
//       //System.out.println(adList.size());
//
//        assertEquals(10,num);    
//    }
    

    	
  
	



	
	@Test
    public void FR51() throws InterruptedException {
		ChromeOptions options = new ChromeOptions();  
		options.addArguments("--headless");  	
		ChromeDriver browserWeb = new ChromeDriver(options);
		browserWeb.get(startUrl + "admin");
		Thread.sleep(500);
		adminLogin("admin", "1234", browserWeb);
		Thread.sleep(500);

        browserWeb.findElement(By.className("ad-tab")).click();
        //browser.findElement(By.className("admin-log-out")).click();
        List<WebElement> adlist = browser.findElements(By.className("ad-list-component"));
        System.out.println(adlist.size());
        assertNotNull(adlist.size());  
        browserWeb.close();
    }
	
	@Test
    public void FR57() throws InterruptedException  {
		
		ChromeOptions options = new ChromeOptions();  
		options.addArguments("--headless");  	
		ChromeDriver browserWeb = new ChromeDriver(options);
		browserWeb.get(startUrl + "admin");
		Thread.sleep(1000);
		adminLogin("admin", "1234", browserWeb);
		Thread.sleep(1000);

        browserWeb.findElement(By.className("promote-tab")).click();

        WebElement SearchInput = browserWeb.findElement(By.className("searchInput"));    
        String input=SearchInput.getAttribute("value");
        System.out.println("sss+"+input);

       
        Thread.sleep(1000);
      
        List<WebElement> suggestions = browserWeb.findElements(By.className("feed-component-wrapper"));
        System.out.println(suggestions.size());
        browserWeb.close();
        
        assertNotNull(suggestions.size());    
    }
	
	@Test
	public void FR58() throws InterruptedException {	
		
		ChromeOptions options = new ChromeOptions();  
		options.addArguments("--headless");  	
		ChromeDriver browserWeb = new ChromeDriver(options);
		browserWeb.get(startUrl + "admin");
		Thread.sleep(1000);
		adminLogin("admin", "1234", browserWeb);
		Thread.sleep(1000);
		
		WebElement blockDiv = browserWeb.findElement(By.xpath("//div[contains(@class,'-most-followed')]"));
				
		((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", blockDiv);
		((JavascriptExecutor) browserWeb).executeScript("window.scrollBy(0,-100)","");
		
		List<WebElement> listElements = blockDiv.findElements(By.className("influencer-list-component"));

		browserWeb.close();
		assertEquals(10, listElements.size());
		
		
		
	}
	

//	@Test
//    public void FR66() throws InterruptedException {
//
//	ChromeOptions options = new ChromeOptions();  
//	options.addArguments("--headless");  	
//	ChromeDriver browserWeb = new ChromeDriver(options);
//	browserWeb.get(startUrl + "admin");
//	Thread.sleep(500);
//	adminLogin("admin", "1234", browserWeb);
//	Thread.sleep(500);
//
//        browserWeb.findElement(By.className("ad-tab")).click();
//        
//        Thread.sleep(1000);
//       
//        List<WebElement> adlist = browserWeb.findElements(By.className("ad-list-component"));
//        System.out.println(adlist.size());
//        adlist.get(2).click();
//        List<WebElement>  list = adlist.get(2).findElements(By.tagName("span"));
//        
//
//        String click = "";
//        
//
//        for (WebElement data : list) {
//
//            if (data.getAttribute("title").equals("Total amount of clicks on ad")) {
//
//                click = data.getText();
//                //System.out.println(click);
//            }
//
//        }
//        int temp=Integer.parseInt(click);
//        List<WebElement> top= browserWeb.findElements(By.className("influencer-list-component"));
//        //System.out.println(top.size());
//        if(temp>=5) {
//            assertEquals(top.size(),5);
//        }else {
//            assertEquals(top.size(),click);
//        }
//browserWeb.close();
//    }

	
	
	
	
	@Test
    public void FR68() throws InterruptedException {        
    
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");      
        ChromeDriver browserWeb = new ChromeDriver(options);
        username="testing12";
        password="testing12";
        startUrl = "http://localhost:8080/";
        browserWeb.get(startUrl + "admin");
        adminLogin("admin", "1234", browserWeb);
        
    	browserWeb.findElement(By.className("promote-tab")).click();

        WebElement blockDiv = browserWeb.findElement(By.className("admin-block-content"));    
        ((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", blockDiv);
        ((JavascriptExecutor) browserWeb).executeScript("window.scrollBy(0,-100)","");
        
        String searchKey = "Justin Bieber";
        WebElement searchField = blockDiv.findElement(By.className("searchInput"));
        searchField.sendKeys(searchKey);
        
        WebElement searchheader = blockDiv.findElement(By.className("search-header"));
        browserWeb.findElement(By.className("blockButton")).click();
        Thread.sleep(2000);
        
        browserWeb.get(startUrl + "admin");
    	browserWeb.findElement(By.className("promote-tab")).click();
        blockDiv = browserWeb.findElement(By.className("admin-block-content"));    
        ((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", blockDiv);
        Thread.sleep(500);
        List<WebElement> blocked = browserWeb.findElements(By.className("unblockButton"));

        for (WebElement b : blocked) {        
            WebElement item = b.findElement(By.xpath(".."));    
            String name = item.findElement(By.xpath(".//p[2]")).getText();    
            if (name.equals(searchKey)) {
                item.findElement(By.className("unblockButton")).click();
                Thread.sleep(500);
            }
        }
        
        browserWeb.get(startUrl + "admin");
    	browserWeb.findElement(By.className("promote-tab")).click();
        blockDiv = browserWeb.findElement(By.className("admin-block-content"));    
        ((JavascriptExecutor) browserWeb).executeScript("arguments[0].scrollIntoView(true);", blockDiv);
        Thread.sleep(500);
        List<WebElement> blockedNew = browserWeb.findElements(By.className("unblockButton"));
        
        ArrayList<String> namesNew = new ArrayList<String>();
        for (WebElement b : blockedNew) {        
            WebElement item = b.findElement(By.xpath(".."));    
            namesNew.add(item.findElement(By.xpath(".//p[2]")).getText());    
        }
        
        browserWeb.close();
        
        assertFalse(namesNew.contains(searchKey));
    }
	
	
	@Test
	public void FR67() throws InterruptedException {		
		login(username,password,browser);
		logout(browser);
		browser.get("http://localhost:8080/admin");
		adminLogin("admin", "1234", browser);
		
		browser.findElement(By.className("promote-tab")).click();
		
		boolean exist=false;
		WebElement element = browser.findElement(By.className("admin-block-content"));
		if (element==null) {
			exist=false;
		} else {
			exist=true;
		}
		
		assertEquals(true, exist);
		
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
	
	public static void adminLogin(String username, String password, WebDriver browser) throws InterruptedException {
		
		browser.findElement(By.cssSelector("[placeholder='username']")).sendKeys(username);
		browser.findElement(By.cssSelector("[placeholder='password']")).sendKeys(password);
		browser.findElement(By.xpath("//button[contains(text(),'Login')]")).click();;
		Thread.sleep(1000);
	}
	
	public static void logout(WebDriver browser) {

		//go to settings page'
		browser.findElement(By.className("subFooter")).findElement(By.className("fa-cogs")).click();
		browser.findElement(By.tagName("button")).click();
	}
	
	


	


}

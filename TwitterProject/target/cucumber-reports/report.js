$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TwitterApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Twitter functionalities",
  "description": "",
  "id": "test-twitter-functionalities",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Test Twitter login with valid credentials",
  "description": "",
  "id": "test-twitter-functionalities;test-twitter-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open googlechrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid username and valid password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.Open_googlechrome_and_start_application()"
});
formatter.result({
  "duration": 14241288298,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_enters_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 4465203437,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 4432447342,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test Tweet functionality",
  "description": "",
  "id": "test-twitter-functionalities;test-tweet-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User clicks tweet box after login",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User composes new tweet within the limit",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should be able to tweet successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.User_clicks_tweet_box_after_login()"
});
formatter.result({
  "duration": 2777827907,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_composes_new_tweet_within_the_limit()"
});
formatter.result({
  "duration": 2146373963,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.user_should_be_able_to_tweet_successfully()"
});
formatter.result({
  "duration": 20955,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Test Tweet functionality with Image",
  "description": "",
  "id": "test-twitter-functionalities;test-tweet-functionality-with-image",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User clicks tweet box after login",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User composes new tweet with a image",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user should be able to tweet successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.User_clicks_tweet_box_after_login()"
});
formatter.result({
  "duration": 232976328,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_composes_new_tweet_with_a_image()"
});
formatter.result({
  "duration": 57268643,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot focus element\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-BAK52FH\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\sanju\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50551}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: cda21afea2e800ca479b5a27690c1039\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat stepDefinition.TestTwitter.User_composes_new_tweet_with_a_image(TestTwitter.java:74)\r\n\tat ✽.When User composes new tweet with a image(TwitterApplication.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestTwitter.user_should_be_able_to_tweet_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Test Tweet delete functionality",
  "description": "",
  "id": "test-twitter-functionalities;test-tweet-delete-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Tweets",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User delete the tweet from dropdown option",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user should be able to delete tweet successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.User_Tweets()"
});
formatter.result({
  "duration": 41481,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_delete_the_tweet_from_dropdown_option()"
});
formatter.result({
  "duration": 60890685864,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027dropdown open\u0027]//div[@class\u003d\u0027dropdown-menu is-autoCentered dropdown-menu--rightAlign\u0027]//ul[@role\u003d\u0027menu\u0027]//li[@class\u003d\u0027js-actionDelete\u0027]//button[@class\u003d\u0027dropdown-link\u0027]\"}\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-BAK52FH\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\sanju\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50551}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: cda21afea2e800ca479b5a27690c1039\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027dropdown open\u0027]//div[@class\u003d\u0027dropdown-menu is-autoCentered dropdown-menu--rightAlign\u0027]//ul[@role\u003d\u0027menu\u0027]//li[@class\u003d\u0027js-actionDelete\u0027]//button[@class\u003d\u0027dropdown-link\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.TestTwitter.User_delete_the_tweet_from_dropdown_option(TestTwitter.java:90)\r\n\tat ✽.When User delete the tweet from dropdown option(TwitterApplication.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestTwitter.user_should_be_able_to_delete_tweet_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Test Tweet functionality with emoji",
  "description": "",
  "id": "test-twitter-functionalities;test-tweet-functionality-with-emoji",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Scenario5"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User clicks tweet button after login",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User composes new tweet with a emoji",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user should be able to tweet successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.User_clicks_tweet_button_after_login()"
});
formatter.result({
  "duration": 1944878519,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_composes_new_tweet_with_a_emoji()"
});
formatter.result({
  "duration": 8463320126,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.user_should_be_able_to_tweet_successfully()"
});
formatter.result({
  "duration": 25230,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Test Twitter tweet like functionality",
  "description": "",
  "id": "test-twitter-functionalities;test-twitter-tweet-like-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Scenario6"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User completed all three tweets after login",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User click on like button in last tweet",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User should be able to view the like count for the tweet",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.User_completed_all_three_tweets_after_login()"
});
formatter.result({
  "duration": 65001,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_click_on_like_button_in_last_tweet()"
});
formatter.result({
  "duration": 1009057767,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_should_be_able_to_view_the_like_count_for_the_tweet()"
});
formatter.result({
  "duration": 65428,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Test follow functionality using search",
  "description": "",
  "id": "test-twitter-functionalities;test-follow-functionality-using-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@Scenario7"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User clicks on search field",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "User enters name to be followed",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "click on search icon",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user should be able to view result",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user click on follow button",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "user should be able to follow successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.User_clicks_on_search_field()"
});
formatter.result({
  "duration": 1360299089,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_enters_name_to_be_followed()"
});
formatter.result({
  "duration": 1383812678,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.click_on_search_icon()"
});
formatter.result({
  "duration": 819369792,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.user_should_be_able_to_view_result()"
});
formatter.result({
  "duration": 15596980887,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.user_click_on_follow_button()"
});
formatter.result({
  "duration": 565360594,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.user_should_be_able_to_follow_successfully()"
});
formatter.result({
  "duration": 79540,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Test multiple Tweet functionality",
  "description": "",
  "id": "test-twitter-functionalities;test-multiple-tweet-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Scenario8"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User again clicks tweet button after login",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User composes new valid tweet",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "User clicks add another button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User composes another tweet within the limit",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user should be able to tweet both successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.User_again_clicks_tweet_button_after_login()"
});
formatter.result({
  "duration": 903692000,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_composes_new_valid_tweet()"
});
formatter.result({
  "duration": 60430059848,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(@class,\u0027RichEditor RichEditor--emojiPicker is-fakeFocus\u0027)]//div[contains(@name,\u0027tweet\u0027)]\"}\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-BAK52FH\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\sanju\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50551}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: cda21afea2e800ca479b5a27690c1039\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(@class,\u0027RichEditor RichEditor--emojiPicker is-fakeFocus\u0027)]//div[contains(@name,\u0027tweet\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:185)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementByXPath(RemoteWebElement.java:261)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:181)\r\n\tat stepDefinition.TestTwitter.User_composes_new_valid_tweet(TestTwitter.java:186)\r\n\tat ✽.When User composes new valid tweet(TwitterApplication.feature:51)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestTwitter.User_clicks_add_another_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestTwitter.User_composes_another_tweet_within_the_limit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestTwitter.user_should_be_able_to_tweet_both_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 57,
  "name": "Test duplicate tweet",
  "description": "",
  "id": "test-twitter-functionalities;test-duplicate-tweet",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@Scenario09"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "User already composes a tweet",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "User enters new same tweet as before",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user should be unable to tweet",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.User_already_composes_a_tweet()"
});
formatter.result({
  "duration": 125725,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_enters_new_same_tweet_as_before()"
});
formatter.result({
  "duration": 60094567948,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"tweet-box-home-timeline\"}\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-BAK52FH\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\sanju\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50551}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: cda21afea2e800ca479b5a27690c1039\n*** Element info: {Using\u003did, value\u003dtweet-box-home-timeline}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.TestTwitter.User_enters_new_same_tweet_as_before(TestTwitter.java:214)\r\n\tat ✽.When User enters new same tweet as before(TwitterApplication.feature:59)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestTwitter.user_should_be_unable_to_tweet()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 63,
  "name": "Test Tweet by exceeding the maximum allowed limit",
  "description": "",
  "id": "test-twitter-functionalities;test-tweet-by-exceeding-the-maximum-allowed-limit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@Scenario10"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "User clicks new tweet box",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "User composes new tweet by exceeding the maximum limit",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "user should be unable tweet",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTwitter.User_clicks_new_tweet_box()"
});
formatter.result({
  "duration": 125725,
  "status": "passed"
});
formatter.match({
  "location": "TestTwitter.User_composes_new_tweet_by_exceeding_the_maximum_limit()"
});
formatter.result({
  "duration": 60066149796,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"tweet-box-home-timeline\"}\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-BAK52FH\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\sanju\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50551}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: cda21afea2e800ca479b5a27690c1039\n*** Element info: {Using\u003did, value\u003dtweet-box-home-timeline}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.TestTwitter.User_composes_new_tweet_by_exceeding_the_maximum_limit(TestTwitter.java:232)\r\n\tat ✽.When User composes new tweet by exceeding the maximum limit(TwitterApplication.feature:65)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestTwitter.user_should_be_unable_tweet()"
});
formatter.result({
  "status": "skipped"
});
});
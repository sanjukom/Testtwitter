Feature: Test Twitter functionalities

@Scenario1
	Scenario: Test Twitter login with valid credentials
		Given Open googlechrome and start application
		When User enters valid username and valid password
		Then User should be able to login successfully
		
@Scenario2
	Scenario: Test Tweet functionality
		Given User clicks tweet box after login
		When User composes new tweet within the limit
		Then user should be able to tweet successfully		
		
@Scenario3
	Scenario: Test Tweet functionality with Image
		Given User clicks tweet box after login
		When User composes new tweet with a image
		Then user should be able to tweet successfully	
		
@Scenario4
	Scenario: Test Tweet delete functionality
		Given User Tweets
		When User delete the tweet from dropdown option
		Then user should be able to delete tweet successfully
		
@Scenario5
	Scenario: Test Tweet functionality with emoji
		Given User clicks tweet button after login
		When User composes new tweet with a emoji
		Then user should be able to tweet successfully
		
@Scenario6
	Scenario: Test Twitter tweet like functionality
		Given User completed all three tweets after login
		When User click on like button in last tweet
		Then User should be able to view the like count for the tweet

@Scenario7
	Scenario: Test follow functionality using search
		Given User clicks on search field
		When User enters name to be followed
		And click on search icon
		Then user should be able to view result
        When user click on follow button
		Then user should be able to follow successfully
		
@Scenario8
	Scenario: Test multiple Tweet functionality
		Given User again clicks tweet button after login
		When User composes new valid tweet
		And User clicks add another button
		And User composes another tweet within the limit
		Then user should be able to tweet both successfully	
		
@Scenario09
	Scenario: Test duplicate tweet
		Given User already composes a tweet
		When User enters new same tweet as before
		Then user should be unable to tweet
				
@Scenario10
	Scenario: Test Tweet by exceeding the maximum allowed limit
		Given User clicks new tweet box
		When User composes new tweet by exceeding the maximum limit
		Then user should be unable tweet

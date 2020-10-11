Feature: Dropbox Upload Document Testing

  Scenario: Create a new folder and upload two documents
    Given I navigate to dropbox login page
    When I enter email address in email field with "amitpande99@outlook.com" and password with "chiki3939"
    And I have logged in to my dropbox account successfully
    And I create a new "test" folder 
    Then I upload multiple documents to test folder successfully

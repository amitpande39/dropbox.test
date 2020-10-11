# Dropbox tests developed with TestCafe and CucumberJS

# Overview of scenario:

- Login
- Create New Folder
- Upload multiple Documents
- Assertions
  - User is logged successfully
  - Folder is created
  - Document uploaded and matched the total of expected count

# Assumption

- Test has been run on MAC machine so it is exptected to run it on MAC machine
- It is assumed that the host has already logged to dropbox using the follwing credential (Email: amitpande99@outloo.com, Password: chiki3939), this is to avoid captcha very first time user logs in to dropbox when runing test.

# Test Execution

- Prerequisite : Please ensure to install following on you machine
  - Node
  - VSCode

* Checkout this project
* Open the project in VSCode
* Perform `npm install` from root directory
* Perform `npm test` to execute tests

# Limitation

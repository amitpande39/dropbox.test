# Dropbox tests developed with TestCafe and CucumberJS

# Overview of scenario:

- Login
- Create New Folder
- Upload multiple Documents (2 documents)
- Assertions
  - User is logged successfully
  - Folder is created
  - Document uploaded and matched the the count of uploaded documents

# Assumption

- I have deveoped this project on Mac machine so have not test it on windows OS.
- currently this project supports chrome only

# Test Execution

- Prerequisite : Please ensure to install following on your machine
  - Node
  - VSCode or similar editor

* Checkout this project
* Open the project in VSCode or similar editor
* Perform `npm install` from root (dropbox-tests) directory
* Perform `npm test` to execute tests

# Scope Of Improvement

- Reporting needs to be added
- A clean up function can be implemented to delete all the documents that are uploaded during test exection
- While unchecking `Remember me` checkbox (at the time of login), a check can be added to see if this checkbox is checked because if it is not checked then no action is required

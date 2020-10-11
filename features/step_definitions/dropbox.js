const { signInPage } = require('../support/pages/sign-in-page');
const { homePage } = require('../support/pages/home-page');
const dotenv = require('dotenv');
const { Given, When, Then } = require('cucumber');
const { ClientFunction, Selector, t } = require('testcafe');
const appData = require('../../data/testdata/app-data.json');
const { userPersonalPage } = require('../support/pages/user-personal-page');
const { helper } = require('../../utils/helper');

dotenv.config();

Given(/^I navigate to dropbox login page$/, async function () {
  await testController.navigateTo(signInPage.url());
  await testController
    .expect(homePage.loginLink().exists)
    .ok({ timeout: Number(process.env.PAGE_LOAD_TIMEOUT) });
});

When(
  /^I enter email address in email field with \"([^\"]*)\" and password with \"([^\"]*)\"$/,
  async function (email, password) {
    await testController
      .wait(Number(process.env.PAGE_LOAD_TIMEOUT))
      .click(homePage.loginLink())
      .typeText(signInPage.emailTextbox(), email, { paste: true })
      .typeText(signInPage.passwordTextbox(), password, {
        paste: true,
      })
      .click(signInPage.rememberCheckbox())
      .click(signInPage.signInButton());
  }
);
When(
  /^I have logged in to my dropbox account successfully$/,
  async function () {
    await testController
      .expect(signInPage.accountMenu().textContent)
      .contains(appData.userDetails.userInitials, {
        timeout: Number(process.env.ASSERTION_TIMEOUT),
      });
  }
);
When(/^I create a new \"([^\"]*)\" folder$/, async function (folderName) {
  await testController.click(userPersonalPage.createNewFolder());
  await testController
    .maximizeWindow()
    .typeText(userPersonalPage.inputNewFolderName(), folderName + Date.now())
    .click(userPersonalPage.createButton())
    .expect(userPersonalPage.folderTitle().textContent)
    .contains('test')
    .expect(userPersonalPage.uploadFile().exists)
    .ok();
});

Then(
  /^I upload multiple documents to test folder successfully$/,
  async function () {
    let setNumOfUploadedDocs = 1;
    await helper.uploadDocument(
      appData.mobileBill.docName,
      appData.mobileBill.docPath,
      setNumOfUploadedDocs
    );
    const reloadPage = ClientFunction(() => location.reload(true), {
      boundTestRun: testController,
    });
    await reloadPage();
    await testController
      .expect(await userPersonalPage.documentTitle().exists)
      .ok({ timeout: Number(process.env.ASSERTION_TIMEOUT) });
    setNumOfUploadedDocs += 1;
    await helper.uploadDocument(
      appData.powerBill.docName,
      appData.powerBill.docPath,
      setNumOfUploadedDocs
    );
  }
);

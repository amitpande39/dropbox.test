const dotenv = require('dotenv');
const { Selector } = require('testcafe');
const {
  userPersonalPage,
} = require('../features/support/pages/user-personal-page');

dotenv.config();

exports.helper = {
  getDocumentCount() {
    return userPersonalPage.uploadedDocuments().exists
      ? userPersonalPage.uploadedDocuments().count
      : 0;
  },

  async uploadDocument(docPath, numOfUploadedDocs) {
    await testController.wait(Number(process.env.PAGE_LOAD_TIMEOUT));
    await testController.click(await userPersonalPage.uploadFileLink());
    await testController
      .setFilesToUpload(Selector(userPersonalPage.inputFile()), [docPath])
      .wait(Number(process.env.PAGE_LOAD_TIMEOUT));
    await testController
      .expect(await this.getDocumentCount())
      .eql(numOfUploadedDocs);
  },
};

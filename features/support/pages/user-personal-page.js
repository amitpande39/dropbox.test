const { Selector } = require('testcafe');

exports.userPersonalPage = {
  url: function () {
    return 'https://www.dropbox.com/register';
  },
  selectAllFilesFromMenu: function () {
    return Selector('.uee-FeatureNav-allFiles').with({
      boundTestRun: testController,
    });
  },
  actionMenu: function () {
    return Selector('.uee-AppActionsPopover-OverflowButton').with({
      boundTestRun: testController,
    });
  },
  uploadFileLink: function () {
    return Selector(
      '.uee-AppActionsView-SecondaryActionMenu-text-upload-file'
    ).with({
      boundTestRun: testController,
    });
  },
  uploadedDocuments: function () {
    return Selector('table').find('tbody').find('tr').with({
      boundTestRun: testController,
    });
  },
  selectFolder: function (folderName) {
    return Selector('.brws-file-name-element').withText(folderName).with({
      boundTestRun: testController,
    });
  },
  inputFile: function (testController) {
    return Selector('input[type="file"]', { visibilityCheck: false })
      .nth(0)
      .with({
        boundTestRun: testController,
      });
  },

  createNewFolderLink: function () {
    return Selector(
      '.uee-AppActionsView-SecondaryActionMenu-text-new-folder'
    ).with({
      boundTestRun: testController,
    });
  },
  folderTitle: function () {
    return Selector('.dig-Title').nth(1).with({
      boundTestRun: testController,
    });
  },

  documentTitle: function () {
    return Selector('.brws-file-name-element').with({
      boundTestRun: testController,
    });
  },
  enterNewFolderName: function () {
    return Selector('#new_folder_name_input[type="text"]').with({
      boundTestRun: testController,
    });
  },
  createButton: function () {
    return Selector('.dig-Modal-footer .dig-Button--primary').with({
      boundTestRun: testController,
    });
  },
};

const { Selector } = require('testcafe');

exports.homePage = {
  url: function () {
    return 'https://www.dropbox.com/register';
  },
  loginLink: function () {
    return Selector('.login-register-switch-link').filterVisible().with({
      boundTestRun: testController,
    });
  },
};

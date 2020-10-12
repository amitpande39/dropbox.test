const { Selector } = require('testcafe');

exports.homePage = {
  loginLink: function () {
    return Selector('.login-register-switch-link').filterVisible().with({
      boundTestRun: testController,
    });
  },
};

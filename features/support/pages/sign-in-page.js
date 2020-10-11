const { Selector } = require('testcafe');

exports.signInPage = {
  url: function () {
    return 'https://www.dropbox.com/register';
  },
  emailTextbox: function () {
    return Selector("[name='login_email']").with({
      boundTestRun: testController,
    });
  },
  passwordTextbox: function () {
    return Selector("[name='login_password']").with({
      boundTestRun: testController,
    });
  },
  signInButton: function () {
    return Selector("[type='submit'] div").with({
      boundTestRun: testController,
    });
  },
  rememberCheckbox: function () {
    return Selector("[name='remember_me']").with({
      boundTestRun: testController,
    });
  },
  notificationBellIcon: function () {
    return Selector('.notification-button-bell-container').with({
      boundTestRun: testController,
    });
  },
};

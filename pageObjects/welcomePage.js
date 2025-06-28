class WelcomePage {
  get signUpbtn() {
    return $('android=new UiSelector().text("Sign Up")');
  }

  get fullNameField() {
    return $(
      'android=new UiSelector().resourceId("text-input-outlined").instance(0)'
    );
  }
}
module.exports = new WelcomePage();

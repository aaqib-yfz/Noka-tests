class WelcomePage {
  get signUpbtn() {
    return $('android=new UiSelector().text("Sign Up")');
  }

  get fullNameField() {
    return $(
      'android=new UiSelector().resourceId("text-input-outlined").instance(0)'
    );
  }

  get email() {
    return $(
      'android=new UiSelector().resourceId("text-input-outlined").instance(1)'
    );
  }

  get password() {
    return $(
      'android=new UiSelector().resourceId("text-input-outlined").instance(2)'
    );
  }

  get confirmPassword() {
    return $(
      'android=new UiSelector().resourceId("text-input-outlined").instance(3)'
    );
  }

  get signup() {
    return $('android=new UiSelector().text("Sign Up")');
  }
}
module.exports = new WelcomePage();

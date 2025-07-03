class WelcomePage {
  // signup screen selectors
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

  // Login Screen Selectors

  get LoginEmail() {
    return $(
      '(//android.widget.EditText[@resource-id="text-input-outlined"])[1]'
    );
  }

  get LoginPassword() {
    return $(
      '(//android.widget.EditText[@resource-id="text-input-outlined"])[2]'
    );
  }

  get signIntBtn() {
    return $('//android.widget.Button[@content-desc="Sign In"]');
  }

  get signOutbtn() {
    return $('android=new UiSelector().text("Sign Out")');
  }
}

export { WelcomePage };

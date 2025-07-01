import { NavigationBar } from "../constants/selectors/navigationBar";
import * as welcomePage from "../constants/selectors/welcomePage";
const navigationBar = new NavigationBar();

export class AuthScreen {
  async signUp(name, email, password) {
    await welcomePage.signUpbtn.click();
    await browser.pause(1000); // Pause for 1 second

    await welcomePage.fullNameField.addValue(name);
    await browser.pause(1000); // Pause for 1 second

    await welcomePage.email.addValue(email);
    await browser.pause(1000);

    await welcomePage.password.addValue(password);
    await welcomePage.confirmPassword.addValue(password);
    await welcomePage.signup.click();
    await browser.pause(2000);
  }

  async logIn(email, password) {
    await welcomePage.LoginEmail.addValue(email);
    await welcomePage.LoginPassword.addValue(password);
    await welcomePage.signIntBtn.click();
  }

  async signout() {
    await navigationBar.visitSettings();
    await welcomePage.signOutbtn.click();
  }
}

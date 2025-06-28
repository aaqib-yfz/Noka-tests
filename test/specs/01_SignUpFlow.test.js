const welcomePage = require("../../pageObjects/constants/selectors/welcomePage");
/// <reference types="webdriverio/sync" />
/// <reference types="@wdio/globals/types" />

describe("Signup Flow", () => {
  it("test", async () => {
    await welcomePage.signUpbtn.click();
    await browser.pause(1000); // Pause for 1 second

    await welcomePage.fullNameField.addValue("hello");
    await browser.pause(1000); // Pause for 1 second

    await welcomePage.email.addValue("test6@abc.com");
    await browser.pause(1000);

    await welcomePage.password.addValue("12345678");
    await welcomePage.confirmPassword.addValue("12345678");
    await welcomePage.signup.click();
    await browser.pause(2000); // Wait for API call to complete
  });
});

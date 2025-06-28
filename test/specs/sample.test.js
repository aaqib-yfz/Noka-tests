const welcomePage = require("../../pageObjects/welcomePage");
/// <reference types="webdriverio/sync" />
/// <reference types="@wdio/globals/types" />

describe("Sample", () => {
  it("test", async () => {
    await welcomePage.signUpbtn.click();
    await browser.pause(1000); // Pause for 1 second

    await welcomePage.fullNameField.addValue("hello");
    await browser.pause(1000); // Pause for 1 second
  });
});

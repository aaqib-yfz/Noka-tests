const welcomePage = require("../../pageObjects/constants/selectors/welcomePage");
const { Helper } = require("../../pageObjects/helper");
const { remote } = require("webdriverio");
const { AuthScreen } = require("../../pageObjects/screens/authSceen");
const {
  NavigationBar,
} = require("../../pageObjects/constants/selectors/navigationBar");
/// <reference types="webdriverio/sync" />
/// <reference types="@wdio/globals/types" />

const helper = new Helper();
const email = helper.getRandomEmail(10);
const name = helper.getRandomName(10);
const password = helper.getRandomPassword(10);
const navigationBar = new NavigationBar();

console.log("Random Email:", email);
console.log("Random Name:", name);
console.log("Random Password:", password);

describe("Pantry Items", () => {
  before(async () => {
    const authScreen = new AuthScreen();
    driver = await remote({
      path: "/wd/hub",
      port: 4723,
      capabilities: {
        platformName: "Android",
        "appium:deviceName": "Pixel_8",
        "appium:platformVersion": "16.0",
        "appium:automationName": "UiAutomator2",
        "appium:app": "D:/Noka tests/noka.apk",
      },
    });

    await authScreen.signUp(name, email, password);
    await authScreen.signout();
  });

  beforeEach(async () => {
    const authSceen = new AuthScreen();
    authSceen.logIn(email, password);
  });

  it("Add Items in Pantry", async () => {
    await navigationBar.visitMyPantry();
  });
});

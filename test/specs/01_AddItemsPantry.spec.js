const { Helper } = require("../../pageObjects/helper");
const { AuthScreen } = require("../../pageObjects/screens/authSceen");
const { PantryScreen } = require("../../pageObjects/screens/pantryScreen");
/// <reference types="webdriverio/sync" />
/// <reference types="@wdio/globals/types" />

const helper = new Helper();
const email = helper.getRandomEmail(10);
const name = helper.getRandomName(10);
const password = helper.getRandomPassword(10);

console.log("Random Email:", email);
console.log("Random Name:", name);
console.log("Random Password:", password);

describe("Pantry Items", () => {
  before(async function () {
    this.timeout(20000);
    console.log("before hook start");
    const authScreen = new AuthScreen();
    await authScreen.signUp(name, email, password);
    await authScreen.signout();
    console.log("before hook end");
  });

  beforeEach(async function () {
    this.timeout(10000);
    console.log("beforeEach hook start");
    const authScreen = new AuthScreen();
    await authScreen.logIn(email, password);
    console.log("beforeEach hook end");
  });

  it("Add Items in Pantry", async function () {
    this.timeout(20000);
    console.log("it block start");

    const pantryScreen = new PantryScreen();
    await pantryScreen.addItem("meat", "2", "kg", "Meat", "2", "Pantry");
    console.log("it block end");
  });
});

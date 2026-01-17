require("dotenv").config();
const { spawn } = require("child_process");

exports.config = {
  // ====================
  // BrowserStack creds
  // ====================
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  // ====================
  // Test runner
  // ====================
  runner: "local",

  // ====================
  // Specs
  // ====================
  specs: ["./test/specs/**/*.js"],

  // ====================
  // Capabilities
  // ====================
  maxInstances: 1,

  capabilities: [
    {
      platformName: "Android",

      // Device details (must exist on BrowserStack)
      "appium:deviceName": "Google Pixel 8",
      "appium:platformVersion": "14.0",
      "appium:automationName": "UiAutomator2",

      // App uploaded to BrowserStack
      "appium:app": "bs://7859e32f122f8995208d85636e4188dfb5d07605",

      // BrowserStack options
      "bstack:options": {
        projectName: "Noka App",
        buildName: "Android Appium Tests",
        sessionName: "Smoke Test - Launch App",
        debug: true,
        networkLogs: true,
      },
    },
  ],

  // ====================
  // Services
  // ====================
  services: [
    [
      "browserstack",
      {
        testObservability: false,
      },
    ],
  ],

  // ====================
  // Logging & timeouts
  // ====================
  logLevel: "info",
  waitforTimeout: 40000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  // ====================
  // Framework
  // ====================
  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 300000,
  },

  // ====================
  // Hooks
  // ====================
  beforeCommand: async function () {
    await browser.pause(100);
  },

  afterSession: async function (_config, _caps, _specs) {
    try {
      const sessionId = browser.sessionId;
      const res = await fetch(
        `https://api-cloud.browserstack.com/app-automate/sessions/${sessionId}.json`,
        {
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(
                `${process.env.BROWSERSTACK_USERNAME}:${process.env.BROWSERSTACK_ACCESS_KEY}`,
              ).toString("base64"),
          },
        },
      );
      const data = await res.json();
      const url = data?.automation_session?.public_url;
      if (url) {
        console.log("BrowserStack session:", url);
        // Windows: open default browser
        spawn("cmd", ["/c", "start", "", url], {
          stdio: "ignore",
          detached: true,
        });
      }
    } catch (err) {
      console.warn("Could not open BrowserStack session URL:", err.message);
    }
  },
};

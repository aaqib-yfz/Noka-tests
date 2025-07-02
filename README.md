# Noka Tests

A mobile app testing project using WebdriverIO and Appium for Android automation testing.

## 📱 Project Overview

This project contains automated tests for the Noka mobile application using WebdriverIO with Appium for Android device testing. The tests are written in JavaScript and use the Page Object Model pattern for better maintainability.

## 🛠️ Tech Stack

- **WebdriverIO** - JavaScript test automation framework
- **Appium** - Mobile app automation tool
- **Mocha** - JavaScript test framework
- **UiAutomator2** - Android UI automation engine
- **Node.js** - JavaScript runtime

## 📋 Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **Java JDK** (v8 or higher)
- **Android SDK** with:
  - Android SDK Platform Tools
  - Android SDK Build Tools
  - At least one Android API level installed
- **Appium** (v2.19.0 or higher)
- **Android Emulator** or physical Android device

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd noka-tests
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Appium globally** (if not already installed)

   ```bash
   npm install -g appium
   ```

4. **Install Appium drivers**
   ```bash
   appium driver install uiautomator2
   ```

## 📱 Setup Android Environment

1. **Set up Android SDK environment variables**

   ```bash
   export ANDROID_HOME=/path/to/android/sdk
   export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
   ```

2. **Start Android Emulator** or connect physical device

   ```bash
   # For emulator
   emulator -avd Pixel_8

   # Or connect physical device via USB with USB debugging enabled
   ```

3. **Verify device connection**
   ```bash
   adb devices
   ```

## 🧪 Running Tests

### Start Appium Server

```bash
appium
```

### Run Tests

```bash
npx wdio run wdio.conf.js
```

### Run Specific Test File

```bash
npx wdio run wdio.conf.js --spec test/specs/sample.test.js
```

## 📁 Project Structure

```
noka-tests/
├── pageObjects/           # Page Object Model classes
│   └── welcomePage.js     # Welcome page elements and methods
├── test/
│   └── specs/            # Test specifications
│       └── sample.test.js # Sample test file
├── wdio.conf.js          # WebdriverIO configuration
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Configuration

The main configuration is in `wdio.conf.js`:

- **Platform**: Android
- **Device**: Pixel_8 emulator
- **Platform Version**: Android 16.0
- **Automation Engine**: UiAutomator2
- **App Path**: `D:/Noka tests/noka.apk`
- **Test Framework**: Mocha
- **Reporter**: Spec reporter

## 📝 Writing Tests

### Page Object Model

Tests use the Page Object Model pattern. Example from `welcomePage.js`:

```javascript
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
```

### Test Structure

Tests are written using Mocha's BDD syntax:

```javascript
const welcomePage = require("../../pageObjects/welcomePage");

describe("Sample", () => {
  it("test", async () => {
    await welcomePage.signUpbtn.click();
    await browser.pause(1000);
    await welcomePage.fullNameField.addValue("hello");
  });
});
```

## 🔍 Test Commands

- **Click element**: `await element.click()`
- **Add value**: `await element.addValue("text")`
- **Wait**: `await browser.pause(milliseconds)`
- **Find element**: `$('android=new UiSelector().text("Text")')`

## 📊 Test Reports

Test results are displayed in the console using the Spec reporter. For more detailed reporting, you can configure additional reporters in `wdio.conf.js`.

## 🐛 Troubleshooting

### Common Issues

1. **Device not detected**

   - Ensure USB debugging is enabled
   - Check `adb devices` output
   - Restart ADB server: `adb kill-server && adb start-server`

2. **Appium connection issues**

   - Verify Appium server is running
   - Check port availability
   - Restart Appium server

3. **Element not found**
   - Verify element selectors
   - Check if app is in correct state
   - Add appropriate waits

### Debug Mode

Run tests with debug logging:

```bash
npx wdio run wdio.conf.js --logLevel debug
```

## 🤝 Contributing

1. Follow the existing code structure
2. Use Page Object Model for new page interactions
3. Add appropriate waits and error handling
4. Test on both emulator and physical devices

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For issues and questions:

- Check the [WebdriverIO documentation](https://webdriver.io/docs/)
- Review [Appium documentation](http://appium.io/docs/en/about-appium/intro/)
- Check existing issues in the project repository

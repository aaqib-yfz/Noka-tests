class Helper {
  getRandomEmail(length) {
    var result = "";
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result + "+test@test.com";
  }

  getRandomName(length) {
    var result = "";
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getRandomPassword(length) {
    var result = "";
    var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    for (var i = 0; i < length; i++) {
      result += upperCharacters.charAt(
        Math.floor(Math.random() * upperCharacters.length)
      );
      result += lowerCharacters.charAt(
        Math.floor(Math.random() * lowerCharacters.length)
      );
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result + "!";
  }

  async tapAt(x, y) {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x, y },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 100 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    await driver.releaseActions();
  }
}

export { Helper };

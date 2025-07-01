const { Helper } = require("../../helper");
const helper = new Helper();

export class NavigationBar {
  async visitHome() {
    helper.tapAt(115, 2271);
  }

  async visitMyPantry() {
    helper.tapAt(322, 2271);
  }

  async visitUsedItems() {
    helper.tapAt(522, 2271);
  }

  async visitWastedItems() {
    helper.tapAt(756, 2271);
  }

  async visitSettings() {
    helper.tapAt(972, 2255);
  }
}

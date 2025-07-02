import { Helper } from "../../helper";

const helper = new Helper();
class NavigationBar {
  async visitHome() {
    await helper.tapAt(115, 2271);
  }

  async visitMyPantry() {
    await helper.tapAt(322, 2271);
  }

  async visitUsedItems() {
    helper.tapAt(522, 2271);
  }

  async visitWastedItems() {
    await helper.tapAt(756, 2271);
  }

  async visitSettings() {
    await helper.tapAt(972, 2255);
  }
}

export { NavigationBar };

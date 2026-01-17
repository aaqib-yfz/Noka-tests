import { Helper } from "../../helper";

const helper = new Helper();
class NavigationBar {
  async visitHome() {
    await helper.tapAt(161, 2271);
  }

  async visitMyPantry() {
    await helper.tapAt(350, 2271);
  }

  async visitUsedItems() {
    await helper.tapAt(539, 2271);
  }

  async visitWastedItems() {
    await helper.tapAt(723, 2271);
  }

  async visitSettings() {
    await helper.tapAt(908, 2255);
  }
}

export { NavigationBar };

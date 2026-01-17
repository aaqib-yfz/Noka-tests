import { NavigationBar } from "../constants/selectors/navigationBar";
import { PantryScreenSelectors } from "../constants/selectors/pantryScreen";

const pantryScreenSelectors = new PantryScreenSelectors();
const navigationBar = new NavigationBar();
export class PantryScreen {
  async addItem(itemName, quantity, unit, category, date, storage) {
    await navigationBar.visitMyPantry();
    await pantryScreenSelectors.addItemsBtn();

    await pantryScreenSelectors.itemNameField.waitForDisplayed();
    await pantryScreenSelectors.itemNameField.setValue(itemName);

    await pantryScreenSelectors.quantity.waitForDisplayed();
    await pantryScreenSelectors.quantity.setValue(quantity);

    await pantryScreenSelectors.selectUnitDropDown.waitForDisplayed();
    await pantryScreenSelectors.selectUnitDropDown.click();
    const unitOption = pantryScreenSelectors.unitOption(unit);
    await unitOption.waitForDisplayed();
    await unitOption.click();

    await pantryScreenSelectors.selectCategory.waitForDisplayed();
    await pantryScreenSelectors.selectCategory.click();
    const categoryOption = pantryScreenSelectors.categoryOption(category);
    await categoryOption.waitForDisplayed();
    await categoryOption.click();

    await pantryScreenSelectors.dateDropDown.waitForDisplayed();
    await pantryScreenSelectors.dateDropDown.click();
    const datePick = pantryScreenSelectors.datePick(date);
    await datePick.waitForDisplayed();
    await datePick.click();
    await pantryScreenSelectors.dateOkBtn.waitForDisplayed();
    await pantryScreenSelectors.dateOkBtn.click();

    await pantryScreenSelectors.storageDropDown.waitForDisplayed();
    await pantryScreenSelectors.storageDropDown.click();
    const storageOption = pantryScreenSelectors.storageOption(storage);
    await storageOption.waitForDisplayed();
    await storageOption.click();

    await pantryScreenSelectors.addItemBtn.waitForDisplayed();
    await pantryScreenSelectors.addItemBtn.click();
  }
}

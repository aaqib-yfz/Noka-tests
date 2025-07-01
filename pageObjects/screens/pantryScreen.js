import { NavigationBar } from "../constants/selectors/navigationBar";
import * as pantryScreen from "../constants/selectors/pantryScreen";
const pantryScreenSelectors = require("../../pageObjects/constants/selectors/pantryScreen");
const navigationBar = new NavigationBar();
export class PantryScreen {
  async addItem(itemName, quantity, unit, category, date, storage) {
    await navigationBar.visitMyPantry();
    await expect(pantryScreenSelectors.addItemsBtn).toBeDisplayed();
    await pantryScreen.addItemsBtn.click();

    const nameField = pantryScreen.itemNameField;
    await nameField.setValue(itemName);

    const itemQuantity = pantryScreen.quantity;
    await itemQuantity.setValue(quantity);

    await pantryScreen.selectUnitDropDown.click();
    const unitOption = pantryScreen.unitOption(unit);
    await unitOption.click();

    await pantryScreen.selectCategory.click();
    const categoryOption = pantryScreen.categoryOption(category);
    await categoryOption.click();

    await pantryScreen.dateDropDown.click();
    const datePick = pantryScreen.datePick(date);
    await datePick.click();
    await pantryScreen.dateOkBtn.click();

    await pantryScreen.storageDropDown.click();
    const storageOption = pantryScreen.storageOption(storage);
    await storageOption.click();

    await pantryScreen.addItemBtn.click();
  }
}

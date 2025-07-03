import { NavigationBar } from "../constants/selectors/navigationBar";
import { PantryScreenSelectors } from "../constants/selectors/pantryScreen";

const pantryScreenSelectors = new PantryScreenSelectors();
const navigationBar = new NavigationBar();
export class PantryScreen {
  async addItem(itemName, quantity, unit, category, date, storage) {
    await driver.pause(1000); // or better: wait for element
    await navigationBar.visitMyPantry();
    await expect(pantryScreenSelectors.addItemsBtn).toBeDisplayed();
    await pantryScreenSelectors.addItemsBtn.click();

    const nameField = pantryScreenSelectors.itemNameField;
    await nameField.setValue(itemName);

    const itemQuantity = pantryScreenSelectors.quantity;
    await itemQuantity.setValue(quantity);

    await pantryScreenSelectors.selectUnitDropDown.click();
    const unitOption = pantryScreenSelectors.unitOption(unit);
    await unitOption.click();

    await pantryScreenSelectors.selectCategory.click();
    const categoryOption = pantryScreenSelectors.categoryOption(category);
    await categoryOption.click();

    await pantryScreenSelectors.dateDropDown.click();
    const datePick = pantryScreenSelectors.datePick(date);
    await datePick.click();
    await pantryScreenSelectors.dateOkBtn.click();

    await pantryScreenSelectors.storageDropDown.click();
    const storageOption = pantryScreenSelectors.storageOption(storage);
    await storageOption.click();

    await pantryScreenSelectors.addItemBtn.click();
  }
}

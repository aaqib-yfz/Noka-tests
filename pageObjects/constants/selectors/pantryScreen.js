class PantryScreenSelectors {
  get addItemsBtn() {
    return $('android=new UiSelector().text("Add Item")');
  }

  get itemNameField() {
    return $('android=new UiSelector().text("Item Name")');
  }

  get quantity() {
    return $('android=new UiSelector().text("Quantity")');
  }

  get selectUnitDropDown() {
    return $('android=new UiSelector().text("Select Unit")');
  }
  unitOption(text) {
    return $(`android=new UiSelector().text("${text}")`);
  }

  get selectCategory() {
    return $('android=new UiSelector().text("Select Category")');
  }
  categoryOption(text) {
    return $(`android=new UiSelector().description("${text}")`);
  }

  get dateDropDown() {
    return $(
      'android=new UiSelector().text("Select Date Bought (YYYY-MM-DD)")'
    );
  }
  datePick(text) {
    return $(`android=new UiSelector().text("${text}")`);
  }
  get dateOkBtn() {
    return $('android=new UiSelector().resourceId("android:id/button1")');
  }

  get storageDropDown() {
    return $('android=new UiSelector().text("Select Storage Location")');
  }
  storageOption(text) {
    return $(`android=new UiSelector().text("${text}")`);
  }

  get addItemBtn() {
    return $('android=new UiSelector().text("Add Item")');
  }
}

export { PantryScreenSelectors };

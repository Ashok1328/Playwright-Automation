exports.LogoutPage = class LogoutPage {
  constructor(page) {
    this.page = page;
    this.LogoutLink = "#logout2";
  }

  async Logout() {
    this.page.locator(this.LogoutLink).click();
  }
};

import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.spec";
import { HomePage } from "../pages/HomePage.spec";
import { CartPage } from "../pages/CartPage.spec";
import { PlaceOrder } from "../pages/PlaceOrder.spec";

test("Test", async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("Ashik", "Ashik@123");

  await page.waitForTimeout(3000);

  //Home

  const home = new HomePage(page);
  await home.addProductToCart("Nexus 6");
  await page.waitForTimeout(3000);
  await home.gotoCart();

  //Cart

  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart("Nexus 6");
  expect(await status).toBe(true);

  //Place Order

  const order = new PlaceOrder(page);
  await order.orderInfo(
    "Ramhari",
    "Nepal",
    "Pokhara",
    "1754201226541898",
    "7",
    "3"
  );
  await page.waitForTimeout(5000);
});

import { test, expect } from "@playwright/test";

test("Home Page Test", async ({ page }) => {
  await page.locator("https://demoblaze.com/");

  //Login

  await page.locator("#login2").click();

  await page.locator("#loginusername").fill("Ashok");

  await page.locator("#loginpassword").fill("Ashok@123");

  await page.locator("//button[normalize-space()='Log in']").click();

  //HomePage

  //Logout
});

test("Add Product to Carrt Test", async ({ page }) => {
  //Login
  //Add Product to Cart
  //Logout
});

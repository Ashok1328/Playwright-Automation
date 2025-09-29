import { test, expect } from "@playwright/test";

test("Home Page Test", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  //Login

  await page.locator("#login2").click();

  await page.locator("#loginusername").fill("Ashik");

  await page.locator("#loginpassword").fill("Ashik@123");

  await page.locator("//button[normalize-space()='Log in']").click();

  //HomePage

  const produts = await page.$$(".hrefch");
  expect(produts).toHaveLength(9);

  //Logout

  await page.locator("#logout2").click();

  await page.waitForTimeout(5000);
});

test("Add Product to Cart Test", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  //Login

  await page.locator("#login2").click();

  await page.locator("#loginusername").fill("Ashik");

  await page.locator("#loginpassword").fill("Ashik@123");

  await page.locator("//button[normalize-space()='Log in']").click();

  //Add Product to Cart

  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

  await page.locator("//a[normalize-space()='Add to cart']").click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });

  //Logout

  await page.locator("#logout2").click();

  await page.waitForTimeout(5000);
});

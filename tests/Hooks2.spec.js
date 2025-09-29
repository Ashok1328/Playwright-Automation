import { test, expect } from "@playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/index.html");

  //Login

  await page.locator("#login2").click();

  await page.locator("#loginusername").fill("Ashik");

  await page.locator("#loginpassword").fill("Ashik@123");

  await page.locator("//button[normalize-space()='Log in']").click();
});

test.afterAll(async () => {
  //Logout

  await page.locator("#logout2").click();
});

test("Home Page Test", async () => {
  //HomePage

  const produts = await page.$$(".hrefch");
  expect(produts).toHaveLength(9);
});

test("Add Product to Cart Test", async () => {
  //Add Product to Cart

  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

  await page.locator("//a[normalize-space()='Add to cart']").click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });
});

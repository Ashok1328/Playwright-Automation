import { test, expect } from "@playwright/test";

test("Mouse Hover Action", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.waitForSelector('//a[normalize-space()="Desktops"]');

  const desktop = await page.locator('//a[normalize-space()="Desktops"]');

  const macbook = await page.locator('//a[normalize-space()="Mac (1)"]');

  //mouse hover

  await desktop.hover();
  await macbook.hover();

  await page.waitForTimeout(5000);
});

test.only("Mouse Hover", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const point = await page.locator("//button[normalize-space()='Point Me']");

  const laptops = await page.locator("//a[normalize-space()='Laptops']");

  //mouse hover

  await point.hover();
  await laptops.hover();

  await page.waitForTimeout(5000);
});

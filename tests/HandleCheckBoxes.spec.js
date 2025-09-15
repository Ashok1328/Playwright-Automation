import { test, expect } from "@playwright/test";

test("HandleCheckBoxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //single checkbox
  await page.locator("//input[@id='sunday']").check();

  expect(await page.locator("//input[@id='sunday']")).toBeChecked();

  expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();

  expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();

  //multiple checkboxes
  const checkboxLocators = [
    "//input[@id='sunday']",
    "//input[@id='tuesday']",
    "//input[@id='thursday']",
  ];

  for (const locator of checkboxLocators) {
    //select multiple check boxes
    await page.locator(locator).check();
  }

  await page.waitForTimeout(5000);

  for (const locator of checkboxLocators) {
    //unselect multiple check boxes

    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }

  await page.waitForTimeout(5000);
});

import { test, expect } from "@playwright/test";

test("HandleRadioButtons", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //for male
  await page.locator("//input[@id='male']").check();

  await expect(await page.locator("//input[@id='male']")).toBeChecked();

  await expect(
    await page.locator("//input[@id='male']").isChecked()
  ).toBeTruthy();

  //for female
  await expect(
    await page.locator("//input[@id='female']").isChecked()
  ).toBeFalsy();
});

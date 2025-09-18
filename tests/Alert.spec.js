import { test, expect } from "@playwright/test";

test("Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling alert handling ----- Dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("simple Alert");
    expect(dialog.message()).toContain("I am a alert box!");

    await dialog.accept();
  });

  await page.locator("//button[@id='alertBtn']");

  await page.waitForTimeout(5000);
});

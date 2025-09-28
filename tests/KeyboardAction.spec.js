const { test, expect } = require("@playwright/test");

test("Keyboard action", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  // await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("Welcome to Automation!");

  await page.type('[name="text1"]', "Welcome to Automation!");

  // Ctrl+A --- Select the text

  await page.keyboard.press("Meta+A");

  // Ctrl+C -- Copy the text

  await page.keyboard.press("Meta+C");

  // Tab
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  // Ctrl+V  -- Paste the text

  await page.keyboard.press("Meta+V");

  await page.waitForTimeout(5000);
});

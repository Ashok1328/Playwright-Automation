import { test, expect } from "@playwright/test";

test.skip("Alert", async ({ page }) => {
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

test.skip("Confirmation Dialog-Alert with Ok and Cancel", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("Confirmation Alert");
    expect(dialog.message()).toContain("Press a button!");

    await dialog.accept(); //close by using OK button

    // await dialog.dismiss(); // close by using cancel
  });

  await page.click('//button[normalize-space()="Confirmation Alert"]');

  await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
  await page.waitForTimeout(5000);
});

test("Prompt Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("Prompt Alert");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");

    await dialog.accept("Kriti22"); //close by using OK button

    // await dialog.dismiss(); // close by using cancel
  });

  await page.click("//button[@id='promptBtn']");

  await expect(page.locator("//p[@id='demo']")).toHaveText(
    "Hello Kriti22! How are you today?"
  );
  await page.waitForTimeout(5000);
});

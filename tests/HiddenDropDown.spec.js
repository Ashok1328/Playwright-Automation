import { test, expect } from "@playwright/test";

test("HiddenDropDown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("//input[@placeholder='Username']").fill("Admin");

  await page.locator("//input[@placeholder='Password']").fill("admin123");

  await page.locator("//button[normalize-space()='Login']").click();

  await page.locator("//span[normalize-space()='PIM']").click();

  //click on dropdown

  await page
    .locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]")
    .click();

  //waiting for options

  await page.waitForTimeout(3000);

  const options = await page.$$("//div[@role='listbox']//span");
  for (let option of options) {
    const jobTitle = await option.textContent();

    //console.log(jobTitle);

    if (jobTitle.includes("QA Engineer")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});

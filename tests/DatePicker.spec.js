import { test, expect } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // await page.fill("#datepicker", "09/25/2025");

  // data picker

  const year = "2026";
  const month = "April";
  const date = "15";

  await page.click("#datepicker"); //open calender

  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();

    if (currentYear == year && currentMonth == month) {
      break;
    }
    await page.locator('[title="Next"]').click();
  }

  // dates selection using loop

  const dates = await page.$$(".ui-state-default");

  for (const dt of dates) {
    if ((await dt.textContent()) == date) {
      await dt.click();
      break;
    }
  }

  // date selection without loop

  await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

  await page.waitForTimeout(5000);
});

import { test, expect } from "@playwright/test";

test("Page Screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "HomePage.png",
  });
});

test("Full Page Screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "FullPage.png",
    fullPage: true,
  });
});

test.only("Element screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page
    .locator('//*[@id="tbodyid"]/div[1]/div')
    .screenshot({ path: "tests/screenshots/" + Date.now() + "galaxy_s6.png" });
});

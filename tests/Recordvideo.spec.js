import { test, expect } from "@playwright/test";

test("Recording Video", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.getByRole("link", { name: "Log in" }).click();

  await page.locator("#loginusername").fill("Ashik");

  await page.locator("#loginpassword").fill("Ashik@123");

  await page.getByRole("button", { name: "Log in" }).click();

  await expect(page.locator("#logout")).toBeVisible();
});

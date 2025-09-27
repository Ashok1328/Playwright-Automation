import { test, expect } from "@playwright/test";

test("Single File", async ({ page }) => {
  await page.goto("https://www.foundit.in/");

  await page.waitForSelector(".mqfind-upload");

  await page.locator("#file-upload").setInputFiles("");

  await page.waitForTimeout(5000);
});

test.only("Mulitple Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "tests/uploadFiles/CINDERS BENEATH.pdf",
      "tests/uploadFiles/Quality Assurance Resume.pdf",
    ]);

  await page.waitForTimeout(3000);

  expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
    "CINDERS BENEATH.pdf"
  );

  expect(await page.locator("#fileList li:nth-child(2)")).toHaveText(
    "Quality Assurance Resume.pdf"
  );

  await page.waitForTimeout(3000);

  // Removinf Files

  await page.locator("#filesToUpload").setInputFiles([]);

  await page.waitForTimeout(3000);

  expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
    "No Files Selected"
  );

  await page.waitForTimeout(3000);
});

import { test, expect } from "@playwright/test";

test("MultiSelectDropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Select multiple options from multi select dropdown
  // await page.selectOption("#colors", ["Blue", "Red", "Yellow"]);

  //Assertions
  //1) Check number of options in dropdown
  // const options = await page.locator("#colors option");
  // await expect(options).toHaveCount(7);

  // 2) Check number of options in dropdown using JS Array

  /*const options = await page.$$("#colors option");
  // console.log("Number of Options: ", options.length);
  await expect(options.length).toBe(7); */

  // 3) Check presnce of value in dropdown

  const content = await page.locator("#colors").textContent();
  // await expect(content.includes("Blue")).toBeTruthy();

  await expect(content.includes("Black")).toBeFalsy();

  await page.waitForTimeout(3000);
});

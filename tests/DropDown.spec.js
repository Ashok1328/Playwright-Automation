import { test, expect } from "@playwright/test";
import { stat } from "fs";

test("DropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //multiple ways to select option from dropdown

  // await page.locator("#country").selectOption({ label: "Germany" }); label visible text

  // await page.locator("#country").selectOption("Germany");         visible text

  // await page.locator("#country").selectOption({ value: "canada" });  using value

  // await page.locator("#country").selectOption({ index: 1 }); by using index

  // await page.locator("#country", 'United Kingdom');  // by text

  //Assertions

  //1) Check number of dropdown in checkbox -- Approach 1

  // const options = await page.locator("#country option");
  // await expect(options).toHaveCount(10);

  // 2) Check number of dropdown in checkbox -- Approach 2

  // const options = await page.$$("#country option");
  // console.log("Number of Options: ", options.length);

  // await expect(options.length).toBe(10);

  // 3) check presence of value in dropdown -- [Approach 2]

  // const content = await page.locator("#country").textContent();
  // await expect(content.includes("China")).toBeTruthy();

  // 4) check response of value in the drop-down -- [Approach 2 using looping]

  /*const options = await page.$$("#country option");
  let status = false;

  for (const option of options) {
    // console.log(await option.textContent());

    let value = await option.textContent();
    if (value.includes("France")) {
      status = true;
      break;
    }
  }
  expect(status).toBeTruthy(); */

  // 5) select option from dropdown using loop

  const options = await page.$$("#country option");

  for (const option of options) 
  {
    let value = await option.textContent();
    if (value.includes("India")) 
    {
      await page.selectOption("#country", value);
      break;
    }
  }

  await page.waitForTimeout(3000);
});

import { test, expect } from "@playwright/test";

test("HandlingWebTables", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  //total number of rows and column

  const columns = await table.locator("thead tr th");
  console.log("Total number of columns: ", await columns.count());

  const row = await table.locator("tbody tr");
  console.log("Total number of columns: ", await row.count());

  expect(await columns.count()).toBe(4);

  expect(await row.count()).toBe(5);

  // select checkbox for prodect 4

  /* const matchedRow = row.filter({
    has: page.locator("td"),
    hasText: "Smartwatch",
  });

  matchedRow.locator("input").check();

  await page.waitForTimeout(5000);  */

  // select mutiple products by re-usable fucntion

  /* await selectProduct(row, page, "Smartphone");
  await selectProduct(row, page, "Laptop");
  await selectProduct(row, page, "Tablet");   */

  //print all the product details using loop

  /* for (let i = 0; i < (await row.count()); i++) {
    const rows = row.nth(i);
    const tds = rows.locator("td");
    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }       */

  // read data from all the table using pagination

  const pages = await page.locator(".pagination li a");
  console.log("Total number of pages:", await pages.count());

  for (let p=0; p <await pages.count(); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }

    for (let i = 0; i <await row.count(); i++) {
      const rows = row.nth(i);

      const tds = rows.locator("td");

      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }

    await page.waitForTimeout(3000);
  }

  await page.waitForTimeout(3000);
});

async function selectProduct(row, page, name) {
  const matchedRow = row.filter({
    has: page.locator("td"),
    hasText: name,
  });

  await matchedRow.locator("input").check();
}

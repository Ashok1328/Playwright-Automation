import { test, expect } from "@playwright/test";

test("Asssertion", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

  //Page has URl
  await expect(page).toHaveURL(
    "https://demo.nopcommerce.com/register?returnUrl=%2F"
  );

  //page has title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //element is visible
  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  //element is enable
  const searchElement = await page.locator("#small-searchterms");
  await expect(searchElement).toBeEnabled();

  //radio button
  const maleRaidioButton = await page.locator("#gender-male");
  await maleRaidioButton.click();
  await expect(maleRaidioButton).toBeChecked();

  //check box

  const newsletterBox = await page.locator("#Newsletter");
  await expect(newsletterBox).toBeChecked();

  //element has a attribute
  const register = await page.locator("#register-button");
  await expect(register).toHaveAttribute("type", "submit");

  //element matches text
  await expect(await page.locator(".page-title h1")).toHaveText("Register"); //full text

  //element contains text
  await expect(await page.locator(".page-title h1")).toContainText("Reg"); //partial text

  //input has a value
  const emailInput = await page.locator("#Email");
  emailInput.fill("ashok12@gmail.com");
  await expect(emailInput).toHaveValue("ashok12@gmail.com");

  //list of element has given length
  const options = await page.locator('select[name="DateofBirthMonth"] option');
  await expect(options).toHaveCount(30);
});

import { test, expect } from "@playwright/test";

test("HandleInnerFrame", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  // frame3.locator("input[name='mytext3']").fill("Welcome");

  // nested frame
  const childFrames = await frame3.childFrames();
  // childFrames[0].locator('//*[@id="i6"]/div[3]/div').check();
  childFrames[0].locator('//*[@id="i24"]/div[2]').check();

  await page.waitForTimeout(5000);
});

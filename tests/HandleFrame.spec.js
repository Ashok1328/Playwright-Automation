import { test, expect } from "@playwright/test";

test("HandleFrame", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //total frames
  const allFrames = await page.frames();
  console.log("Number of Frames: ", allFrames.length);

  //appraoch 1 : using name or url
  // const var = await page.frame('name');   if name is available

  /* const frame1 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame1.fill("[name = 'mytext1']", "Hello");   */

  //approach 2 : using framw locator

  const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name = 'mytext1']");
  inputBox.fill("Hello");

  await page.waitForTimeout(5000);
});

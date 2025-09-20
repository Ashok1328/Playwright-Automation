import {test, expect} from '@playwright/test'

test('HandleFrame', async({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

   //total frames
   const allFrames = await page.frames();
   console.log("Number of Frames: ", allFrames.length);

})
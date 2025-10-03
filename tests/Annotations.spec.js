import { test, expect } from "@playwright/test";

// only
/* test.only("test1", async ({ page }) => {
  console.log("this is my test1 ...");
});

  */

//skip

/* test.skip("test2", async ({ page }) => {
  console.log("this is my test2 ...");
});



test('test3', async({ page, browserName }) => {

  console.log("this is my test3 ...");

  if(browserName === 'chromium')
  {
    test.skip();
  }

})



// Fixme

test('test4', async({ page }) => {

  test.fixme()
  console.log("this is my test4 ...");
})

*/

// Fail

/* test('test5', async({ page }) => {

  test.fail()  //exp
  console.log("this is my test5 ...");
  expect(1).toBe(2);  // if both exp and actual is failed then test pass
})
  

test('test6', async({ page, browserName }) => {
    console.log("this is my test6 ...");

  if(browserName === 'firefox')
  {
    test.fail()
  }
})

*/

// slow
test("test7", async ({ page }) => {
  // test.slow()

  test.setTimeout(5000);
  await page.goto("https://www.demoblaze.com/index.html");
  console.log("this is my test7 ...");
});

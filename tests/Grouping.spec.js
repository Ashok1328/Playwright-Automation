import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log("this is beforeAll hook ...");
});

test.afterAll(async () => {
  console.log("this is afterALl hook ....");
});

test.beforeEach(async () => {
  console.log("this is beforeEach hook ....");
});

test.afterEach(async () => {
  console.log("this is afterEach hook ....");
});

test.describe("Group 1", () => {
  test("Test 1", async ({ page }) => {
    console.log("this is test1 ....");
  });

  test("Test 2", async ({ page }) => {
    console.log("this is test2 ....");
  });
});

test.describe("Group 2", () => {
  test("Test 3", async ({ page }) => {
    console.log("this is test3 ....");
  });

  test("Test 4", async ({ page }) => {
    console.log("this is test4 ....");
  });
});

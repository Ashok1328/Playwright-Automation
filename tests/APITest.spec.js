const { test, expect } = require("@playwright/test");

var userId;

test("Get Users", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test.only("Post User", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Limbey",
      job: "Teacher",
    },
    headers: {
      "Accept" : "application/json",
    },
  });
  console.log(await response.json())
  expect(response.status()).toBe(201);

  var res = await response.json()
  userId = res.id
});

test("Update User", async ({ request }) => {

  const response = await request.put("https://reqres.in/api/users/"+userId, {
    data: {
      name: "Limbey",
      job: "Manager",
    },
    headers: {
      "Accept" : "application/json",
    },
  });
  console.log(await response.json())
  expect(response.status()).toBe(200);

  var res = await response.json()
  userId = res.id


});

test("Delete User", async ({ request }) => {

  const response = await request.delete("https://reqres.in/api.users" + userId)
  expect(response.status()).toBe(204);
});

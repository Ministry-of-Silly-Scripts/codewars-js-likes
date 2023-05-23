const { likes } = require("../src/index");

test("test likes", () => {
  expect(likes(0)).toBe(true);
});

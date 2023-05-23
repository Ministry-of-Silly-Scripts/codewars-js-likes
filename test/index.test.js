const { likes } = require("../src/index");

describe("likes", () => {
  test("it should return 'no one likes this' for any input", () => {
    expect(likes([])).toBe('no one likes this');
  });
});

const { likes } = require("../src/index");

describe("likes", () => {
  test("it should return 'no one likes this' for any input", () => {
    expect(likes([])).toBe('no one likes this');
  });

  test("it should return 'Peter likes this' for an input with just one element: ['Peter']", () => {
    expect(likes(["Peter"])).toBe('Peter likes this');
  })

  test("it should return 'Jacob and Alex like this' for an input with two elements: ['Jacob', 'Alex']", () => {
    expect(likes(["Jacob", "Alex"])).toBe('Jacob and Alex like this');
  })

  test("it should return 'Max, Jacob and Alex like this' for an input with three elements: ['Max', 'Jacob', 'Alex']", () => {
    expect(likes(["Max", "Jacob", "Alex"])).toBe('Max, Jacob and Alex like this');
  })

  test("it should return 'Max, Jacob and 2 others like this' for an input with 4 elements: ['Max', 'Jacob', 'Alex', 'Mark']", () => {
    expect(likes(["Max", "Jacob", "Alex", "Mark"])).toBe('Max, Jacob and 2 others like this');
  })
});

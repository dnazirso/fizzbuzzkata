const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz should,", () => {
  it("returns a regular number when is regular", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it("returns 'fizz' when number is divisible by 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it("returns 'buzz' when number is divisible by 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });

  it("returns 'fizzbuzz' when number is divisible by 5 and 3", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});

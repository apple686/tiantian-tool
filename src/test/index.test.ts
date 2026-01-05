import { add, multiply } from "../index";

describe("add fn test", () => {
  test("add 1+3 = 4", () => {
    expect(add(1, 3)).toBe(4);
  });

  test("add -1+1=0", () => {
    expect(add(-1, 1)).toBe(0);
  });
});

describe("multiply", () => {
  test("multiply 2*2=4", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  test("multiply -2*2=-4", () => {
    expect(multiply(-2, 2)).toBe(-4);
  });
});

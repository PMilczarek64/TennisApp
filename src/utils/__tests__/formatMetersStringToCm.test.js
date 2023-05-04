import { formatMetersStringToCm } from "../utils";

describe("formatMetersStringToCm function", () => {
  test("returns a good value counted from '0.00m' format to cm", () => {
    expect(formatMetersStringToCm("1.00m")).toBe(100);
    expect(formatMetersStringToCm("2.50m")).toBe(250);
    expect(formatMetersStringToCm("0.10m")).toBe(10);
    expect(formatMetersStringToCm("abc")).toBeNaN();
  });
});
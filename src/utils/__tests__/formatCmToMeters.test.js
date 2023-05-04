import { formatCmToMeters } from "../utils";

describe("formatCmToMeters function", () => {
  it("should format cm value to meters", () => {
    expect(formatCmToMeters("101")).toEqual("1.01m");
    expect(formatCmToMeters("175")).toEqual("1.75m");
    expect(formatCmToMeters("163")).toEqual("1.63m");
    expect(formatCmToMeters("200")).toEqual("2.00m");
  });
});
import { isValidEmail } from "../utils";

describe("isValidEmail function", () => {
  test("returns true for valid email and false for invalid email", () => {
    expect(isValidEmail("email@example.com")).toBe(true);
    expect(isValidEmail("testEmail")).toBe(false);
    expect(isValidEmail("email@cracow.")).toBe(false);
    expect(isValidEmail("email@.com")).toBe(false);
    expect(isValidEmail("@cracow.com")).toBe(false);
    expect(isValidEmail("email@.")).toBe(false);
    expect(isValidEmail("email@com")).toBe(false);
    expect(isValidEmail("email@cracowcom")).toBe(false);
  });
});
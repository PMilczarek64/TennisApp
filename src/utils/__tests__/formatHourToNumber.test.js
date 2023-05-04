import { formatHourToNumber } from "../utils";

describe("formatHourToNumber", () => {
  const testValues = [
    { input: "11:30", expected: 11.5 },
    { input: "05:30", expected: 5.5 },
    { input: "20:00", expected: 20 },
    { input: "23:30", expected: 23.5 },
    { input: "24:00", expected: 24 },
    { input: "00:30", expected: 0.5 },
  ];

  const wrongFormatVal = [
    { input: '5:30', expected: "Error"},
    { input: 'abc', expected: "Error"},
  ];

  const wrongTypeVal = [
    { input: {}, expected: 'Error' },
    { input: true, expected: 'Error'},
    { input: undefined, expected: 'Error'},
    { input: () => {}, expected: 'Error'},
  ];

  it("Should return proper value from HH:MM to number", () => {
    for (const currentVal of testValues) {
      expect(formatHourToNumber(currentVal.input)).toBe(currentVal.expected);
    };
  });
  it('should return Error when input value has another format than HH:MM', () => {
    for (const currentVal of wrongFormatVal) {
      expect(formatHourToNumber(currentVal.input)).toBe(currentVal.expected);
    }
  });
  it('should return Error message when input has wrong type or value is undefined', () => {
    for(const currentVal of wrongTypeVal) {
      expect(formatHourToNumber(currentVal.input)).toBe(currentVal.expected);
    }
  });
});

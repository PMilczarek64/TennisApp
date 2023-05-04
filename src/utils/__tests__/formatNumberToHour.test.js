import { formatNumberToHour } from "../utils";

describe('formatNumberToHour', () => {
  const testValues = [
    {input: 5.5, expected: '05:30'},
    {input: 3.5, expected: '03:30'},
    {input: 12, expected: '12:00'},
    {input: 0, expected: '00:00'},
    {input: 23.5, expected: '23:30'},
    {input: 25, expected: "Error"},  
  ];

  const negativeVal = [
    {input: -1, expected: "Error"},
    {input: -15.5, expected: "Error"},
    {input: -123, expected: "Error"},
  ];

  const wrongTypeVal = [
    {input: {}, expected: "Error"},
    {input: '1', expected: "Error"},
    {input: null, expected: "Error"},
    {input: undefined, expected: "Error"},  
  ];

  it('should return formated value to HH:MM', () => {
    for(const currentVal of testValues) {
      expect(formatNumberToHour(currentVal.input)).toBe(currentVal.expected);
    };
  });
  it('should throw Error when value is negative', () => {
    for(const currentVal of negativeVal) {
      expect(formatNumberToHour(currentVal.input)).toBe(currentVal.expected);
    };
  });
  it('should throw Error when type of value is wrong', () => {
    for(const currentVal of wrongTypeVal) {
      expect(formatNumberToHour(currentVal.input)).toBe(currentVal.expected);
    };
  });
});
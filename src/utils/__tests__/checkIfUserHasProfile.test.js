import { checkIfUserHasProfile } from "../utils";

describe("checkIfUserHasProfile", () => {
  it("returns true when userId is a number and playerProfile is defined", () => {
    // given
    const userId = "123";
    const playerProfile = {};

    // when
    const result = checkIfUserHasProfile(userId, playerProfile);

    // then
    expect(result).toEqual(true);
  });

  it("returns false when userId is not a number", () => {
    // given
    const userId = "abc";
    const playerProfile = {};

    // when
    const result = checkIfUserHasProfile(userId, playerProfile);

    // then
    expect(result).toEqual(undefined);
  });

  it("returns false when playerProfile is undefined", () => {
    // given
    const userId = "123";
    const playerProfile = undefined;

    // when
    const result = checkIfUserHasProfile(userId, playerProfile);

    // then
    expect(result).toEqual(false);
  });

  it("returns false when user Id is a number and playerProfile is undefined", () => {
    // given
    const userId = 123;
    const playerProfile = undefined;

    // when
    const result = checkIfUserHasProfile(userId, playerProfile);

    // then
    expect(result).toEqual(false);
  });
});
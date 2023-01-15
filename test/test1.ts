import {
  beforeEach,
  describe,
  expect,
  it,
  run,
} from "https://deno.land/x/tincan/mod.ts";

describe("Array", () => {
  let array: number[];

  beforeEach(() => {
    array = [];
  });

  describe("#indexOf()", () => {
    it("should return the first index of an item", () => {
      array.push(0);
      expect(array.indexOf(0)).toBe(0);
    });

    it.only("should return -1 when the item isn't found", () => {
      expect(array.indexOf(0)).toBe(-1);
    });
  });
});

run();
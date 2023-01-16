import {
  assertEquals,
} from "https://deno.land/std@0.172.0/testing/asserts.ts";
import {
  beforeEach,
  describe,
  it,
} from "https://deno.land/std@0.172.0/testing/bdd.ts";

describe("Array", () => {
  let array: number[];

  beforeEach(() => {
    array = [];
  });

  describe("#indexOf()", () => {
    it("should return the first index of an item", () => {
      array.push(0);
      assertEquals(array.indexOf(0), 0)
    });

    it("should return -1 when the item isn't found", () => {
      assertEquals(array.indexOf(0), -1)
    });
  });
});

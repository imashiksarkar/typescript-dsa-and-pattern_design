import { describe, expect, it } from "vitest"
import getIndices from "./getIndices"

describe("getIndices", () => {
  it("should return [0, 2] given 14", () => {
    // 0th index = 5, 2nd index = 9, 9+5=14
    expect(getIndices([5, 8, 9, 7, 4], 14)).toEqual([0, 2])
  })

  it("should return [3, 4] given 11", () => {
    // 3rd index = 7, 4nd index = 4, 7+4=11
    expect(getIndices([5, 8, 9, 7, 4], 11)).toEqual([3, 4])
  })

  it('should return "null" given 4', () => {
    // no two values in the given array adds up to 4
    expect(getIndices([5, 8, 9, 7, 4], 4)).toEqual(null)
  })
})

import { describe, expect, it } from "vitest"
import findKthPositive from "./findKthPositive"

describe("findKthPositive", () => {
  // counting from 1 (not from index number 0)
  it("should return 9 given 5", () => {
    // missing numbers = [1, 5, 6, 8, 9, 10, 12 ...] = 5th number is 9
    expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9)
  })
  it("should return 6 given 2", () => {
    // missing numbers = [5, 6, 7 ...] = 2nd number is 6
    expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6)
  })
})

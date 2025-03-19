import { describe, expect, it } from "vitest"
import removeDuplicate from "./removeDuplicate"

describe("removeDuplicate", () => {
  it("should remove the duplicates from the given array", () => {
    expect(removeDuplicate([5, 6, 5, 5, 8, "h", "H", "h", "l"])).toEqual([
      5,
      6,
      8,
      "h",
      "l",
    ])
  })
})

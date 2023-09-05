import { describe, expect, it } from "vitest"
import longestCommonPrefix from "./longestCommonPrefix"


describe("longestCommonPrefix", () => {
  it("should return 'fl'", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
  })

  it("should return ''", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
  })
})

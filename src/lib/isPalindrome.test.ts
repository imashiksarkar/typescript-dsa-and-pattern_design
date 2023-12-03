import { describe, expect, it } from "vitest"
import isPalindrome from "./isPalindrome"

describe("isPalindrome", () => {
  it('should return "true" given 121', () => {
    expect(isPalindrome(121)).toBe(true)
  })

  it("should return 'true' given 256", () => {
    expect(isPalindrome(256)).toBe(false)
  })

  it("should return 'true' given 1597951", () => {
    expect(isPalindrome(1597951)).toBe(true)
  })
})

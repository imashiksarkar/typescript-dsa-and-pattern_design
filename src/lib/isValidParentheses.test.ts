import { describe, expect, it } from "vitest"
import isValidParentheses from "./isValidParentheses"

describe("isValidParentheses", () => {
  it("should return 'true' given '()'", () => {
    expect(isValidParentheses("()")).toBe(true)
  })

  it("should return 'true' given '()[]{}'", () => {
    expect(isValidParentheses("()[]{}")).toBe(true)
  })

  it("should return 'false' given '(]'", () => {
    expect(isValidParentheses("(]")).toBe(false)
  })
})

import { describe, expect, it } from "vitest"
import romanToInteger from "./romanToInteger"

describe("romanToInteger", () => {
  it("should return  '50'  given 'l'", () => {
    expect(romanToInteger("l")).toBe(50)
  })

  it("should return  '40'  given 'xl'", () => {
    expect(romanToInteger("xl")).toBe(40)
  })
})

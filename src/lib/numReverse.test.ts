import { describe, expect, it } from "vitest"
import { numRevNum, numRevStr } from "./numReverse"

describe("numReverse", () => {
  describe("numRevNum", () => {
    it("should return '8655' given the number '5568'", () => {
      expect(numRevNum(5568)).toBe(8655)
    })
  })

  describe("numRevStr", () => {
    it("should return '8655' given the number '5568'", () => {
      expect(numRevStr(5568)).toBe(8655)
    })
  })
})

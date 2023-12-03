import { describe, expect, it } from "vitest"
import matchSingleInArr from "./matchSingleInArr"

describe("matchSingleInArr", () => {
  it("should return 'true'", () => {
    expect(matchSingleInArr(["flower", "flow", "flight"], "flow")).toBe(true)
  })

  it("should return 'false'", () => {
    expect(matchSingleInArr(["dog", "race car", "car"], "hi")).toBe(false)
  })
})

import { describe, expect, it } from "vitest"
import repairCars from "./repairCars"

describe.only("removeDuplicate", () => {
  it("should remove the duplicates from the given array", () => {
    const ranks = [4,2,3,1], cars = 10
    expect(repairCars(ranks, cars)).toEqual([4,2,3,1])
  })
})

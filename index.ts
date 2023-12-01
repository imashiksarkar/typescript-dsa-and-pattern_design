import { areThereDuplicates, averagePair, sameFrequency } from "./lib"

// console.log(validAnagram("anagram", "nagaram"))
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
// console.log(countUniqueValues([-2, -1, -1, 0, 1]))
// console.log(sameFrequency(556892, 556829))
// console.log(areThereDuplicates(1, 2, 3, 5, 7, 1))

// Sample Usage
console.log(averagePair([1, 1, 2, 3, 5, 8], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false

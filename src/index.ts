import {
  areThereDuplicates,
  averagePair,
  isSubsequence,
  sameFrequency,
} from "./lib"

let fName = "Ashik"

console.log(isSubsequence("hello", "hello world")) // true
console.log(isSubsequence("sing", "sting")) // true
console.log(isSubsequence("abc", "abracadabra")) // true
console.log(isSubsequence("abc", "acb")) // false

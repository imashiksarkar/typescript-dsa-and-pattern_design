import {
  areThereDuplicates,
  averagePair,
  isSubsequence,
  sameFrequency,
} from './lib'

const main = () => {
  console.log(isSubsequence('hello', 'hello world')) // true
  console.log(isSubsequence('sing', 'sting')) // true
  console.log(isSubsequence('abc', 'abracadabra')) // true
  console.log(isSubsequence('abc', 'acb')) // false
}

// main()

// recursion

const sum = (result: number, num: number): number => {
  if (num < 0) return 0
  // if (num > 0) {
  --num
  //   sum(result + num, num)
  //   console.log(result, num)
  // }

  return sum(result + num, num)
  // return 0
  // let result = 0
}

// console.log(sum(0, 4))

const sumRecursive = (n: number): number => {
  // Base case: if n is 1, return 1
  if (n === 1) return 1

  // Recursive case: sum of numbers from 1 to n is n + sum of numbers from 1 to (n-1)
  return n + sumRecursive(n - 1)
  /**
   * 5 + (5-1)=4
   * 4 + (4-1)=3
   * 3 + (3-1)=2
   * 2 + (2-1)=1
   */
}

// Calculate the sum of numbers from 1 to 4
// const result = sumRecursive(4)
// console.log(result) // Output: 10

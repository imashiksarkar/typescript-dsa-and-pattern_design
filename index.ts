import lib from "./lib";
const {
  removeDuplicate,
  numRevNum,
  numRevStr,
  printf,
  drawPyramid,
  drawButterfly,
  drawDiamond,
  getIndices,
  isPalindrome,
  isValidParentheses,
  romanToInt,
  longestCommonPrefix,
} = lib;

const arr = [
  1,
  2,
  2,
  5,
  2,
  "asHik",
  "Ashik",
  "Rudra",
  true,
  false,
  true,
  "🔭",
  "🔭",
  "😂",
];
// console.log(removeDuplicate(arr));

// console.log(numRevStr(-96892852369))

// console.log(numRevNum(-96892852369))

// console.log(getIndices([5, 8, 9, 7, 4], 15));
// console.log(getIndices([5, 8, 9, 7, 4], 14));
// console.log(getIndices([5, 8, 9, 7, 4], 11));
// console.log(getIndices([5, 8, 9, 7, 4], 4));

// drawPyramid(6);

// drawButterfly(10);

// drawDiamond(11);

// console.log(isPalindrome(121));

// console.log(isValidParentheses("()"));
// console.log(isValidParentheses("()[]{}"));
// console.log(isValidParentheses("(]"));

// printf("Hello ");
// printf("World!");

// console.log(romanToInt("IX")); // 9
// console.log(romanToInt("III")); // 3
// console.log(romanToInt("LVIII")); // 58
// console.log(romanToInt("MCMXCIV")); // 1994

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
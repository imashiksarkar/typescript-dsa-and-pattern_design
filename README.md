# DSA In Typescript

### Remove duplicate from the given array

```typescript
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

console.log(removeDuplicate(arr));

// [1, 2, 5, "asHik", "Rudra", true, false, "🔭", "😂"];
```

### Reverse the given number

```typescript
// converts the value to string to reverse
console.log(numRevStr(-96892852369)); // -96325829869
```

### Reverse the given number

```typescript
// doesn't convert the value to string to reverse
console.log(numRevNum(-96892852369)); // -96325829869
```

### Returns "true" if a value exists in the given array

```typescript
const arr = ["Ashik", "Rudra", 2, 5, ture];

// unlike "includes" it is case insencitive
matchSingleInArr(arr, "ashik"); // true
matchSingleInArr(arr, "sotto"); // false
```

# Find Indecis (Two Sum)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

```typescript
const numArr = [5, 8, 9, 7, 4];
```

### Example 1:

```typescript
const target = 15;
getIndices(numArr, target); // returns [1, 3]
```

### Example 2:

```typescript
const target = 14;
getIndices(numArr, target); // returns [0, 2]
```

### Example 3:

```typescript
const target = 11;
getIndices(numArr, target); // returns [3, 4]
```

## Example 4:

```typescript
const numArr = [5, 8, 9, 7, 4];
const target = 4;
getIndices(numArr, target); // returns null
```

# Palindrome ckeck

```typescript
// 121 => 121
console.log(isPalindrome(121)); // true

// 123 => 321 (121 !== 321)
console.log(isPalindrome(123)); // false
```

# Valid Parentheses

```typescript
console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
```

# Roman To Integer

```typescript
console.log(romanToInt("IX")); // 9
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
```

# Print functin inplemented

```typescript
printf("Hello ");
printf("World!");
// Hello World!
```

# Pattern Design

```typescript
drawPyramid(5) 👇

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *

---------------------

dradPyramid(6) 👇

          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
* * * * * * * * * * *

----------------------------

drawDiamond(11) 👇

          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
* * * * * * * * * * *
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *

-----------------------------

drawButterfly(10) 👇

*         *
**       **
***     ***
****   ****
***** *****
****   ****
***     ***
**       **
*         *
```

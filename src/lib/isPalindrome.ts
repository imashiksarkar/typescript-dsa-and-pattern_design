const isPalindrome = (x: number) => {
  const numToString = String(x);
  const reversedNum = Number(numToString.split("").reverse().join(""));

  if (x === reversedNum) return true;

  return false;
};

export default isPalindrome;

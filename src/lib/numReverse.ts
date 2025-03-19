/**
 * @description reverses number converting the number into string
 */
export const numRevStr = (num: number) => {
  if (num < 10 && num > -10) return num;
  const multiplier = num < 0 ? -1 : 1;

  // turns positive if negative
  num *= multiplier;

  //   reverse the number turning it into string first
  const reversedNum =
    Number(num.toString().split("").reverse().join("")) * multiplier;

  return reversedNum;
};

/**
 * @description reverses number without converting the number into string
 */
export const numRevNum = (num: number) => {
  if (num < 10 && num > -10) return num;

  const multiplier = num < 0 ? -1 : 1;

  // turns positive if negative
  num *= multiplier; // num >=10

  // init first reversed digit and remove the digit from "num"
  let reversedNum: number = num % 10;
  num = Math.floor(num / 10);

  while (num) {
    const lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reversedNum * multiplier;
};

const sameFrequency = (num1: number, num2: number) => {
  // good luck. Add any arguments you deem necessary.
  const numArr = Array(10).fill(0)

  while (num1 > 0) {
    const lastDigit = num1 % 10
    num1 = Math.floor(num1 / 10)
    numArr[lastDigit]++
  }

  while (num2 > 0) {
    const lastDigit = num2 % 10
    num2 = Math.floor(num2 / 10)
    numArr[lastDigit]--
  }

  return numArr.every((value) => value === 0)
}

export default sameFrequency
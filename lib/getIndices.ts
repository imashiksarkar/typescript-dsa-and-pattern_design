type TwoSumType = (numArr: number[], target: number) => number[] | null;

const twoSum: TwoSumType = function (numArr, target) {
  const arrLength = numArr.length;

  // loop over the initial array
  for (let i = 0; i < arrLength - 1; i++) {
    const currNumOfFirstArr = numArr[i];

    const srcNextNumFrom = i + 1;

    for (let j = srcNextNumFrom; j < arrLength; j++) {
      const currNumOfSecondArr = numArr[j];

      const targetedSum = currNumOfFirstArr + currNumOfSecondArr;

      if (targetedSum === target) return [i, j];
    }
  }

  return null;
};

export default twoSum;


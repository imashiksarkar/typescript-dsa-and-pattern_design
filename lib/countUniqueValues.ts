const countUniqueValues = (valuesArr: number[]) => {
  // add whatever parameters you deem necessary - good luck!
  if (valuesArr.length < 2) return 0

  let left = 0,
    right = 1
  while (right < valuesArr.length) {
    if (valuesArr[left] !== valuesArr[right]) {
      left++
      valuesArr[left] = valuesArr[right]
    }
    right++
  }

  return ++left
}

export default countUniqueValues

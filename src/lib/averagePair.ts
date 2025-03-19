export default function averagePair(arr: number[], target: number): boolean {
  if (arr.length < 2) return false

  target *= 2

  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]

    if (sum === target) return true
    else if (sum < target) left++
    else right--
  }

  return false
}

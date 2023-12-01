export default function areThereDuplicates<T extends number | string>(
  ...args: T[]
) {
  const numObj: Record<any, any> = {}

  for (const char of args) {
    numObj[char] = numObj[char] ? numObj[char] + 1 : 1
    if (numObj[char] > 1) return true
  }

  return false
}

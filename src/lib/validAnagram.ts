const validAnagram = (word1: string, word2: string) => {
  // add whatever parameters you deem necessary - good luck!
  if (word1.length !== word2.length) return false

  const word1Obj = {}
  const word2Obj = {}

  for (const char of word1)
    word1Obj[char] = word1Obj[char] ? word1Obj[char] + 1 : 1

  for (const char of word2)
    word2Obj[char] = word2Obj[char] ? word2Obj[char] + 1 : 1

  for (const key in word1Obj) if (word1Obj[key] !== word2Obj[key]) return false

  return true
}

export default validAnagram

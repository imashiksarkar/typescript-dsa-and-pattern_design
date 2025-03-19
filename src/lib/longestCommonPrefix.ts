type NonEmptyStringArray = [string, ...string[]];

const longestCommonPrefix = (strs: NonEmptyStringArray) => {
  if (strs.length < 2) return strs[0];
  let finalStr = "",
    shouldRun = true;
  for (let column = 0; shouldRun; column++) {
    let tempStr = "";

    for (let row = 0; row < strs.length; row++) {
      const currentChar = strs[row][column];

      if (currentChar && row === 0) {
        tempStr = currentChar;
        continue;
      }

      if (tempStr !== currentChar) {
        tempStr = "";
        shouldRun = false;
        break;
      }
    }
    finalStr += tempStr;
  }
  return finalStr;
};

export default longestCommonPrefix;

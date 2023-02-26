const longestCommonPrefix = (strArr: string[]) => {
  if (!strArr.length) return null;
  let finalStr = strArr[0];

  // map over the array from the 1 index
  for (let i = 1; i < strArr.length; i++) {
    const currStr = strArr[i];
    let tempCommonString = "";

    // map over the current string
    for (let j = 0; j < currStr.length; j++) {
      if (currStr[j] === finalStr[j]) tempCommonString += currStr[j];
    }
    finalStr = tempCommonString;
  }
  return finalStr.length ? finalStr : null;
};

export default longestCommonPrefix;

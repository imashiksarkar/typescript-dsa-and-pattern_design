import isMatch from "./matchSingleInArr";

/**
 * @description removes the duplicatue values from the given array
 */
const removeDuplicate = (arr: any[]) => {
  const newArr = arr.reduce((acc: any[], curr: any) => {
    if (!isMatch(acc, curr)) acc.push(curr);
    return acc;
  }, []);
  return newArr;
};

export default removeDuplicate;

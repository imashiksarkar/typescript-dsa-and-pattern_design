/**
 * @query value:any to search in the array
 * @description returns "true" if a spesific value is present inside the given array
 */
const isMatch = (
  searchableArr: any[],
  query: any,
  indexToStart: number = 0
): boolean => {
  for (let index = indexToStart; index < searchableArr.length; index++) {
    if (typeof query === "string") {
      if (typeof searchableArr[index] !== "string") continue;
      const val = searchableArr[index] as string;
      if (val.toLowerCase() === query.toLowerCase()) return true;
    }

    if (searchableArr[index] === query) return true;
  }

  return false;
};

export default isMatch;

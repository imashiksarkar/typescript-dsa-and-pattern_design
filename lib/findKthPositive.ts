const findKthPositive = (arr: number[], k: number): number => {
  for (let i = 0; i <= k; i++) {
    if (arr.includes(i)) {
      k++;
      continue;
    }
  }
  return k;
};

export default findKthPositive;

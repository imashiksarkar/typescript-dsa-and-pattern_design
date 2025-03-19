const romanToInt = function (s: string) {
  const romanNumsState: {
    [key: string]: number;
  } = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  const romanNumsStrArr = s.toLowerCase().split("");

  let num = 0;

  romanNumsStrArr.reduce((prevVal, currentRomanString) => {
    const currentRomanValue = romanNumsState[currentRomanString];

    if (currentRomanValue > prevVal) {
      num += currentRomanValue - prevVal * 2;
    } else {
      num += currentRomanValue;
    }

    prevVal = currentRomanValue;
    return prevVal;
  }, 0);
  return num;
};

export default romanToInt;

const isValidParentheses = function (s: string) {
  const map: {
    [key: string]: string;
  } = {
    "(": ")",

    "{": "}",

    "[": "]",
  };

  const stack: string[] = [];

  const len = s.length;

  for (let i = 0; i < len; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else {
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
export default isValidParentheses;

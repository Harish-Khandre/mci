var numDecodings = (str, index = 0, memo = new Map()) => {
  const isBaseCase1 = !str.length || str[index] === "0";
  if (isBaseCase1) return 0;

  const isisBaseCase2 = index === str.length;
  if (isisBaseCase2) return 1;

  if (memo.has(index)) return memo.get(index);

  return dfs(str, index, memo);
};

const dfs = (str, index, memo) => {
  let count = numDecodings(str, index + 1, memo);

  if (isTwoDigit(str, index)) {
    count += numDecodings(str, index + 2, memo);
  }

  memo.set(index, count);

  return count;
};

var isTwoDigit = (str, index) => {
  const twoDigit = Number(str.slice(index, index + 2));

  return 10 <= twoDigit && twoDigit <= 26;
};

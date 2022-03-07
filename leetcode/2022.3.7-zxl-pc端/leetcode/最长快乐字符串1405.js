/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const ans = [];
  const arr = [
    [a, "a"],
    [b, "b"],
    [c, "c"],
  ];

  while (true) {
    arr.sort((a, b) => b[0] - a[0]);
    let hasNext = false;
    for (const [i, [key, val]] of arr.entries()) {
      if (key <= 0) {
        break;
      }
      n = ans.length;
      if (n >= 2 && ans[n - 2] === val && ans[n - 1] === val) {
        continue;
      }
      hasNext = true;
      ans.push(val);
      arr[i][0]--;
      break;
    }
    if (!hasNext) {
      break;
    }
  }
  return ans.join("");
};
console.log(longestDiverseString(1, 2, 7));

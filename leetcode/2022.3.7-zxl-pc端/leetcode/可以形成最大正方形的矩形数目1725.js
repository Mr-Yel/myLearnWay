/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let n = rectangles.length;
  let maxLen = Math.min(0, 1);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let maxWidth = Math.min(rectangles[i][0], rectangles[i][1]);
    if (maxLen < maxWidth) {
      maxLen = maxWidth;
    }
  }
  for (let i = 0; i < n; i++) {
    let maxWidth = Math.min(rectangles[i][0], rectangles[i][1]);
    if (maxLen == maxWidth) {
      ans++;
    }
  }
  return ans;
};

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
);
var countGoodRectangles = function (rectangles) {
  let ans = 0,
    maxLen = 0;
  for (const rectangle of rectangles) {
    const l = rectangle[0],
      w = rectangle[1];
    const maxWidth = Math.min(l, w);
    if (maxWidth === maxLen) {
      ++ans;
    } else if (maxWidth > maxLen) {
      ans = 1;
      maxLen = maxWidth;
    }
  }
  return ans;
};

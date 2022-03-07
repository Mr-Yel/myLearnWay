/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let ans = 0;
  let map = new Map([
    ["b", 0],
    ["a", 0],
    ["l", 0],
    ["o", 0],
    ["n", 0],
  ]);
  for (i in text) {
    if (map.has(text[i])) {
      map.set(text[i], map.get(text[i]) + 1);
    }
    if (
      map.get("b") >= 1 &&
      map.get("a") >= 1 &&
      map.get("l") >= 2 &&
      map.get("o") >= 2 &&
      map.get("n") >= 1
    ) {
      ans++;
      map.set("b", map.get("b") - 1);
      map.set("a", map.get("a") - 1);
      map.set("l", map.get("l") - 2);
      map.set("o", map.get("o") - 2);
      map.set("n", map.get("n") - 1);
    }
  }
  return ans;
};
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let b = 0,
    a = 0,
    l = 0,
    o = 0,
    n = 0;
  for (let i = 0; i < text.length; i++) {
    switch (text.charAt(i)) {
      case "a":
        a++;
        break;
      case "b":
        b++;
        break;
      case "l":
        l++;
        break;
      case "o":
        o++;
        break;
      case "n":
        n++;
        break;
      default:
        continue;
    }
  }
  return Math.min(a, b, Math.floor(l / 2), Math.floor(o / 2), n);
};

console.log(maxNumberOfBalloons("nlaebolko"));

// 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

// 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

//

// 示例 1：

// 输入：text = "nlaebolko"
// 输出：1

// 示例 2：

// 输入：text = "loonbalxballpoon"
// 输出：2

// 示例 3：

// 输入：text = "leetcode"
// 输出：0

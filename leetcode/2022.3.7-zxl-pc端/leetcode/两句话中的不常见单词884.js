/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const s1Arr = s1.trim().split(/\s+/g);
  const s2Arr = s2.trim().split(/\s+/g);
  let map = new Map();
  let ansArr = [];
  for (const word of s1Arr) {
    if (!map.has(word)) {
      map.set(word, 1);
      ansArr.push(word);
    } else {
      map.set(word, 2);
      if (ansArr.indexOf(word) + 1) {
        ansArr.remove(word);
      }
    }
  }
  for (const word of s2Arr) {
    if (!map.has(word)) {
      map.set(word, 1);
      ansArr.push(word);
    } else {
      map.set(word, 2);
      if (ansArr.indexOf(word) + 1) {
        ansArr.remove(word);
      }
    }
  }
  return ansArr;
};
var sumOfUnique = function (nums) {
  let ans = 0;
  const map = new Map();
  for (const num of nums) {
    if (!map.has(num)) {
      ans += num;
      map.set(num, 1);
    } else if (map.get(num) === 1) {
      ans -= num;
      map.set(num, 2);
    }
  }
  return ans;
};
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

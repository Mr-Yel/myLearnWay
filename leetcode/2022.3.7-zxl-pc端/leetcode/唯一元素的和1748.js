/**
 * @param {number[]} nums
 * @return {number}
 */

//  indexOf() 方法可返回某个指定的(字符串)值在字符串中首次出现的位置。

var sumOfUnique = function (nums) {
  const map = new Map();
  let ans = 0;
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [key, val] of map.entries()) {
    if (val == 1) {
      ans += key;
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
console.log(sumOfUnique([1, 2, 3, 2]));

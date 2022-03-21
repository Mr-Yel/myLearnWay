/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let res = Infinity;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let L = i + 1;
    let R = n - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
      if (sum < target) {
        L++;
      } else if (sum > target) {
        R--;
      } else {
        return sum;
      }
    }
  }
  return res;
};

// 16. 最接近的三数之和
// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

// 示例 1：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// 示例 2：

// 输入：nums = [0,0,0], target = 1
// 输出：0

// 提示：

// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

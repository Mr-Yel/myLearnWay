



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var singleNonDuplicate = function (nums) {
//     let ans = 0;
//     let map = new Map()
//     for (i in nums) {
//         map.set(nums[i],map.get(nums[i])+1 || 1)
//     }
//     map.forEach((el,key)=>{
//         if(el == 1){
//             ans = key
//             return
//         }
//     })
//     return ans
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var singleNonDuplicate = function (nums) {
//     let r = nums.length - 1
//     let l = 0;
//     if(nums.length == 1){
//         return nums[0]
//     }
//     while(1){
//         if(nums[r] != nums[r-1] && nums[r-1] != nums[r-2] ){
//             return nums[r-1]
//         }
//         if(nums[l] != nums[l+1] && nums[l+1] != nums[l+2] ){
//             return nums[l+1]
//         }
//         l++
//         r--
//     }
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var singleNonDuplicate = function (nums) {
//     let left = 0,
//       right = nums.length - 1;
//     // 左闭右闭区间  之所以这里是left<right 而不是left<=right 是因为我们这里是一组一组比，而不是一个一个比较
//     // 是比较一组中前后两个数字是否完全相等
//     while (left < right) {
//       let mid = left + ((right - left) >> 1);
//       // 如果mid是偶数的话，那就减去0 如果mid是奇数的话就减去1
//       mid -= mid & 1;
//       if (nums[mid] == nums[mid + 1]) {
//         // 在右半段查找
//         left = mid + 2;
//       } else {
//         // 在左半段查找  为什么不减去2呢，举例来说
//         // nums = [3, 3, 7, 7, 10, 11, 11]; 第一轮mid为4 nums[mid] == nums[mid + 1] 也就是10!=11
//         // 这时候肯定下次查找的范围肯定要包含10
//         right = mid;
//       }
//     }
//     return nums[left];
//   };
  /**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
    let l = 0, r = nums.length-1;
    while(l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        mid -= mid % 2 === 1 ? 1 : 0;
        if (nums[mid] === nums[mid+1]) {
            l = mid + 2;
        } else {
            r = mid - 2;
        }
    }
    return nums[l];
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));


// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。

// 请你找出并返回只出现一次的那个数。

// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

//  

// 示例 1:

// 输入: nums = [1,1,2,3,3,4,4,8,8]
// 输出: 2
// 示例 2:

// 输入: nums =  [3,3,7,7,10,11,11]
// 输出: 10
//  

// 提示:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 105
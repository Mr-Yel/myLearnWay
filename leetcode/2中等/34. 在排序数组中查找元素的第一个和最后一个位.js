function searchRange (nums, target) {
  let l = -1
  let r = nums.length
  let left
  let right
  //查找数组左边值
  while (l + 1 != r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] < target)
      l = mid
    else
      r = mid
  }
  console.log(r);
  left = r
  right = r
  while(nums[right]==target) {
    right++
  }
  if(nums[left]!=target) return [-1,-1]
  return [left,right-1]
};

console.log(searchRange([1,2,3,4,4,4,4,5,6], 4));

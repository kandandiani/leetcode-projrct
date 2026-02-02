/*
 * @Date: 2026-01-29 23:38:47
 * @Author: WchHxl
 * @LastEditors: test@example.com
 * @LastEditTime: 2026-01-29 23:38:52
 * @Description:
 */
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i+1]) {
      nums[j] = nums[i];
      j++; 
    }
  }
  console.log(j);
  return j;
};
removeDuplicates(nums);
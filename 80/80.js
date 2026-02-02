/*
 * @Date: 2026-01-30 00:05:41
 * @Author: WchHxl
 * @LastEditors: test@example.com
 * @LastEditTime: 2026-01-30 23:32:01
 * @Description:
 */
nums = [0,0,1,1,1,2,2,3]
var removeDuplicates = function(nums) {
    let i = 2;
    if (nums.length <= i) {
        return i;
    }
    for (let j = 2; j < nums.length; j++) {
        if (nums[j] !== nums[i-2]) {
            nums[i] = nums[j];
            i++;
        }
    }
    console.log(i);
    return i;
};
removeDuplicates(nums);
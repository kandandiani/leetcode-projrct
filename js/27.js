/*
 * @Date: 2026-01-29 22:49:26
 * @Author: WchHxl
 * @LastEditors: test@example.com
 * @LastEditTime: 2026-01-29 23:38:06
 * @Description: 
 */

let nums = [3,2,2,3], val = 3;
var removeElement = function(nums, val) {
    let i = 0;
    let arr = [];
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            arr[i] = nums[j];
            i++;
        }
    }
    return arr;
};
console.log(removeElement(nums, val));



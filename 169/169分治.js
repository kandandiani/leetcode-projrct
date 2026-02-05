/*
 * @Date: 2026-02-06 00:08:05
 * @Author: WchHxl
 * @LastEditors: 15712833738@163.com
 * @LastEditTime: 2026-02-06 00:12:59
 * @Description:
 */
var majorityElement = function (nums) {
  const getMode = (low, high) => {
    if (low === high) return nums[low];

    //拆分成更小的区间，一分为二
    let mid = Math.floor((low + high) / 2);

    let left = getMode(low, mid);
    let right =  getMode(mid + 1, high);

    if (left === right) return left;

    let leftCount = getCount(left, low, high); // 统计区间内 left 的个数
    let rightCount = getCount(right, low, high); // 统计区间内 right 的个数

    return leftCount > rightCount ? left : right; // 返回 left 和 right 中个数多的那个
  };

  //统计 low 到 high 之间 num 的数量
  var getCount = (num, low, high) => {
    let count = 0;
    for (let i = low; i <= high; i++) {
      if (nums[i] === num) count++;
    }
    return count;
  };

  return getMode(0, nums.length - 1);
};
a = majorityElement([2,2,1,1,1,2,2])
console.log('a', a)
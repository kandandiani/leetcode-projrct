/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    // 先排序
    arr.sort((a, b) => a - b);
    // 记录最小差值
    let arr_min = [], min = Infinity;
    // 这里arr.length - 1, 因为在倒数第二个的时候其实已经跟最后一个对比过了，所以不用再去执行最后一次循环
    for (let i = 0; i < arr.length - 1; i++) {
        // 直接用后一位-前一位，就是之前的差值
        const cha = arr[i + 1] - arr[i];
        // cha跟记录的min进行对比，如果cha更小，则min=cha，并将当次的减数被减数放到数组
        // 这里不能用push，如果第一次计算的cha=2 记录一次，第二次cha=1，如果用了push，则会在第一次的基础上push,统计会出现问题
        if (cha < min) {
           min = cha;
           // 有更小的差值存在，会重新定义arr_min。
           arr_min = [arr[i], arr[i + 1]];
        }
        // 如果cha == min 则直接push进去
        else if (cha == min) {
            arr_min.push([arr[i], arr[i + 1]]);
        }
    }
    return arr_min;
};
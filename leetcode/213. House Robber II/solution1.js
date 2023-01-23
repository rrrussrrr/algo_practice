var rob = function(nums) {

    if (nums.length === 1) return nums[0]
    if (nums.length === 0) return 0
    function helper(start, len) {

        let result = new Array(len - 1).fill(0);

        for (let i = 0; i < len - 1; i++) {
            const currentHouse = nums[i + start];
            const prevHouseTotal = result[i - 1] !== undefined ? result[i-1] : 0;
            const twoHousesAgoTotal = result[i - 2] !== undefined ? result[i - 2] : 0;
            console.log(result)
            console.log(i, twoHousesAgoTotal)
            result[i] = Math.max(currentHouse, prevHouseTotal, currentHouse + twoHousesAgoTotal)      
        }

        return result[len-2]
        };

    let getFirst = helper(0, nums.length)
    let getLast = helper(1, nums.length)

    console.log(getFirst, getLast)
    return Math.max(getFirst, getLast)
};
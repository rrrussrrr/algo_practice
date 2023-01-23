var rob = function(nums) {
    
 // BOTTOM UP DP VERSION
    
    let lastHouse = 0;
    let twoHousesAgo = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const tmp = lastHouse;
        lastHouse = Math.max(lastHouse, twoHousesAgo + cur)
        twoHousesAgo = tmp;
    }
    
    return lastHouse
    
// MEMOIZED VERSION
//     const cache = {};
    
//     function helper(index = 0) {
//         if (index >= nums.length) return 0
//         if (cache[index] !== undefined) return cache[index]
//         const opt1 = nums[index] + helper(index + 2)
//         const opt2 = helper(index + 1)
//         cache[index] = Math.max(opt1, opt2)
//         return cache[index]
//     }

    // return helper()
    


};
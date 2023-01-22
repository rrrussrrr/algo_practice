var combinationSum4 = function(nums, target) {
    const result = new Array(target + 1).fill(0);
    result[0] = 1;
    for (let t = 1; t <= target; t++) {
        for (let n = 0; n < nums.length; n++) {
            if (nums[n] > t) continue
            const diff = t - nums[n];
            result[t] += result[diff];
        } 
    }
    return result[target]
};
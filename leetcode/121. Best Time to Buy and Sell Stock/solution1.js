var maxProfit = function(prices) {
    
    let maxProfit = 0;
    let currentLow = Infinity;
    for (let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(prices[i] - currentLow, 0, maxProfit)
        currentLow = Math.min(currentLow, prices[i])
    }

    return maxProfit
};
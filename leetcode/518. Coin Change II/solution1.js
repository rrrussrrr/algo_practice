var change = function(amount, coins) {
    
    const result = new Array(amount + 1).fill(0);
    result[0] = 1;
  
    for (let c = 0; c < coins.length; c++) {
      for (let n = 1; n <= amount; n++) {
        if (coins[c] > n) continue
        const diff = n - coins[c];
        result[n] += result[diff]
      }
    }
  console.log(result)
    return result[amount]
  
  };
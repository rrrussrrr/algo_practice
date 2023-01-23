var uniquePaths = function(m, n) {
    
    const result = new Array(m+1);
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(n + 1).fill(0);
    }

    result[1][1] = 1;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            result[i][j] += result[i-1][j] + result[i][j-1];
        }
    }
  
  return result[m][n]

    // TOP DOWN APPROACH
    // const cache = {};
    // function helper(m, n) {
    //     if (m === 1 || n === 1) return 1

    //     if (cache[m*n] === undefined) {
    //         const total = uniquePaths(m -1, n) + uniquePaths(m, n-1)
    //         cache[m*n] = total;           
    //     }
    //     return cache[m*n];
    // }

    // return helper(m, n);
    
};
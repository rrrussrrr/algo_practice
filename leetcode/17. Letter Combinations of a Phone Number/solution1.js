var letterCombinations = function(digits) {
    
    const result = [];
    const map = {
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"]
    }

    function helper(idx=0, str=[]) {
        if (idx === digits.length) {
            if (str.length >0) result.push(str.join(""))
            return
        }
        const currentDigit = digits[idx];
        for (let i = 0; i < map[currentDigit].length; i++) {
            str.push(map[currentDigit][i])
            helper(idx + 1, str)
            str.pop();
        }
    }

    helper()
    return result
};
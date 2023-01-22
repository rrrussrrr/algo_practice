/*
'''
❓ PROMPT
Given a set of numbers S, and a sum K, write a function to compute whether there exists a subset of S whose elements add up to K.

Each element of S is unique and may only be used once in computing the sum.

Example(s)
doesSubsetSumExist([1,2,3], 6) == true (1+2+3=6)
doesSubsetSumExist([1,2,3], 5) == true (2+3=5)
doesSubsetSumExist([1,2,9], 4) == false (no sum exists)
 

🔎 EXPLORE
State your assumptions & discoveries:
 

Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 

📆 PLAN
High-level outline of approach #: 
 

🛠️ IMPLEMENT
function doesSubsetSumExist(nums, sum) {
def doesSubsetSumExist(nums: list[int], sum: int) -> bool:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/

function doesSubsetSumExist(s, k) {

const sums = new Set();

for (let i = 0; i < s.length; i++) {
  const toAdd = new Set();;
  for (let j = 1; j <= k; j++) {
    if (sums.has(j)) {
      toAdd.add(j)
    }
  }

  for (let j = 1; j <= k; j++) {
    if (toAdd.has(j)) {
      sums.add(s[i] + j)
    }
  }

  sums.add(s[i]);

  if (sums.has(k)) return true
}


return false

}

// console.log(doesSubsetSumExist([1,2,3], 6))
// console.log(doesSubsetSumExist([1,2,3], 5))
// console.log(doesSubsetSumExist([1,2,9], 4))

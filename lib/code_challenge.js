// Arrays



// 1: Two Sum


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// var twoSum = function(nums, target) {
//     for (let i = 0; i <= nums.length; i++) {
//         for (let j = i + 1; j <= nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// }

// console.log(twoSum([1,2,3,4,5], 5))


// 2: Divide an array into subarrays with minimum cost



// You are given an array of integers nums of length n.

// The cost of an array is the value of its first element. For example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3.

// You need to divide nums into 3 disjoint contiguous 
// subarrays

// Return the minimum possible sum of the cost of these subarrays.


function minimumCost(nums) {
    let n = nums.length
    if (n < 3) return 0;

    let minCost = Infinity;
    let prefixSum = Array(n).fill(0)

    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }
    
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; i++) {
            let cost = nums[0] + nums[i + 1] + nums[j + 1]
            minCost = Math.min(minCost, cost)
        }
    }
    return minCost;
}

console.log(minimumCost([1, 2, 3]))


// 3:

// 4:

// 5:

// 6:

// 7:

// 8:

// 9:

// 10:
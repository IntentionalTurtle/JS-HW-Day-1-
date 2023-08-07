// Problem 1: Companies
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce((accumulator, current_num) => {
    return accumulator + current_num
})

console.log(nums_reduced)

// Problem 2
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// count_by(1,10) #should return [1,2,3,4,5,6,7,8,9,10]
// count_by(2,5) #should return [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    let i=1;
    while(i<=n){
    
     z.push(i*x);
    i++;
   }
   return z;
   }
}

console.log(count_by(1,10))

//Problem 3:
//Write a function which calculates the average of the numbers in a given list.

array = [0,2,4,6,8,10,50]
function findAverage(array) {
    try{
     let total = array.reduce((accumulator, current_num) => accumulator + current_num);
      return total / array.length;
    }catch {
      return 0
    }
  }

//Problem 4:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1 + 4 + 4 = 9
function squareSum(numbers){
    let i = 0;
    let j = 0;
    while (i < numbers.length){
      j += numbers[i] ** 2
      i++
    }
    return j
  }

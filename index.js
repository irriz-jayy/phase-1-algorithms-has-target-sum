function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target) {
    iterate over the array
    if two numbers in array add up to target
    returns true
    if they dont add up to target
    returns false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

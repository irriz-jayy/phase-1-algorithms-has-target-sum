function hasTargetSum(array, target) {
  //iterate through array and assign i
  for (let i = 0; i < array.length; i++) {
    //Get a number that adds to target
    const total = target - array[i];
    //Go through the rest of the code
    for (let j = i + 1; j < array.length; j++) {
      //take numbers from array and cross check with our total if similar return true
      if (array[j] === total) return true;
    }
  }
  return false; //Have to be declared outside so that there is complete iteration
}
/* 
  Write the Big O time complexity of your function here
  O (n^2)
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target) {
    take array find first number [i]
    take target -array[i] set to total
    take array and find second number array[j]
    check if total number equals to array[j]
    return true
    return false if not equal
  }
*/

/*
  Add written explanation of your solution here
  the code has an array that it runs thrugh the first time to get i and assign it an index. Then the code takes the target number
  and subtracts the number in the array[i] that was found in the fist round of iteartaion and stores it in a constant called total.
  then a second iteration is run through the same array to find j which is always i+1 to avoid reusing the numbers in the array.
  the number in array[j] is then checked strictly if it equal to the total. If it is equal the return is true. Adn after complete array iteration
  and the number is not equal to the total. It returns false.
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

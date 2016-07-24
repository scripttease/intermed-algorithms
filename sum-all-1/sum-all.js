//We'll pass you an array of two numbers. 
//Return the sum of those two numbers and all numbers between them.
//The lowest number will not always come first.function sumAll(arr) {
//

function sumAll(array) {

  var increment = 1;
  var min = Math.min.apply(null, array);
  var max = Math.max.apply(null, array);
  var arrayLength = Math.floor((max - min)/increment) + 1;

  var arrayFill = new Array(arrayLength).fill(1).map(function(x, index, arr) {
    return min + (index * increment);
  });
  // console.log(arrayFill);
  return sumAllOf(arrayFill);
  function sumAllOf(array) {
    var resultArray = arrayFill.reduce(function(prev, curr) {
      return prev + curr;
    });
    return resultArray;
  };
};

var array = [1, 4];
var result = sumAll(array);
console.log(result);

// have array of length max - min plus 1 (or increment)
// fill it with anything (in this case, use 1)
// new Array, when passed only one numerical argument, creates an array of length of the argument
// fill acts on an array, takes up to 3 args, value to fill with, start index (default, 0) and end index (default arr length)
// map takes a callback which produces an element of the new array, itself taking three arguments:
// current val (the val of the el in the given array being currently processed, 
// index, (the index of that el), and arr, the array that map was called on) 
// Reduce takes a callback which takes 4 args; (reduce also takes an optional initial value as its second argument)
// The first time the callback is called, previousValue and currentValue can be one of two values. 
// If initialValue is provided in the call to reduce, then previousValue will be equal to initialValue and currentValue will be equal to the first value in the array. 
// If no initialValue was provided, then previousValue will be equal to the first value in the array and currentValue will be equal to the second.

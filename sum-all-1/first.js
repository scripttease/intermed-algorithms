
function arrayRangeFill(array) {

  var increment = 1;
  var min = Math.min.apply(null, array);
  var max = Math.max.apply(null, array);
  var arrayLength = Math.floor((max - min)/increment) + 1;

  var arrayFill = new Array(arrayLength).fill(1).map(function(x, index, arr) {
    return min + (index * increment);
  });
  return arrayFill;
  console.log(arrayFill);
};

  function sumAllOf(array) {
    var resultArray = array.reduce(function(prev, curr) {
      return prev + curr;
    });
    return resultArray;
  };

var array = [1, 4];

var result = arrayRangeFill(array);
console.log(result);

var result1 = sumAllOf(array);
console.log(result1);

// Write a func that takes an integer N as an input and
// returns the Nth numberin Fibonacci Sequence
function FiboSeq(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return FiboSeq(n - 1) + FiboSeq(n - 2);
  }
}
console.log(FiboSeq(3));

// Array of Arrays
// Write a func that collects all value in an array
// of arrays and return an array of values collected
let arr = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

function collecter(arr) {
  let result = [];
  helper(arr);
  return result;
  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        helper(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
}

collecter(arr);
console.log(collecter(arr));

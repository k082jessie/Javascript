// Write a function called minSubLength which accepts two parameters,
// an array of positive integers and a positive integer. This function
// should return the minimal length of a continuous subarray - the sum
// of element inside this subarray has to be greater than or equal to
// the positive int parameter. If subarray not found, then return 0
arr = [8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12];
sum = 150;

function minSubArray(arr, sum) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLength = Infinity;
  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      let currentLen = end - start;
      if (minLength > currentLen) {
        minLength = currentLen;
      }
      total -= arr[start];
      start++;
    } else if (end >= arr.length) {
      break;
    }
  }
  if (minLength === Infinity) {
    console.log("Cannot find subarray that can sum up to the given number");
    return -1;
  } else {
    console.log(minLength);
    return minLength;
  }
}

minSubArray(arr, sum);

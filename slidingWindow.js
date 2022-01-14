// Write two functions that calculate the max and min sum of n
// consecutive numbers in an array
let arr = [2, 7, 3, 7, 25, 0, 6, 1, -5, 12, -11];
let size = 3;

function maxSum(arr, size) {
  let i = 0;
  let max = -Infinity;
  if (size > arr.length) {
    console.log("null");
    return null;
  }
  for (let i = 0; i <= arr.length - size; i++) {
    let attemp = 0;
    for (let j = i; j < i + size; j++) {
      attemp += arr[j];
    }
    if (attemp > max) {
      max = attemp;
    }
  }
  console.log(max);
  return max;
}
maxSum(arr, size);

function maxSum1(arr, size) {
  let i = 0;
  let max = -Infinity;
  if (size > arr.length) {
    console.log("null");
    return null;
  }
  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }
  let tempValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }
  console.log("maxValue: " + maxValue);
  return maxValue;
}
maxSum1(arr, size);

function minSum(arr, size) {
  let min = Infinity;
  if (size > arr.length) {
    console.log("null");
    return null;
  }
  for (let i = 0; i <= arr.length - size; i++) {
    let attemp = 0;
    for (let j = i; j < i + size; j++) {
      attemp += arr[j];
    }
    if (attemp < min) {
      min = attemp;
    }
  }
  console.log(min);
  return min;
}
minSum(arr, size);

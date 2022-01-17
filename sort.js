// let arr = [14, -4, 17, 6, 22, 1, -5];

function insertionSort(arr) {
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
  }
  console.log(arr);
  return arr;
}
//insertionSort(arr);

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minIndex = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap arr[minIndex] and arr[i]
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  return arr;
}
//selectionSort(arr);

// merge sort
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  // either arr1 or arr2 have sth left, use loop to put all
  // remaining things into the result
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
console.log(merge([1, 15, 17], [-3, 9, 16]));
function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
// console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054]));

// heap sort
// heapSize and arr are global variables
let arr = [15, 3, 17, 3.1415, 18, 20, 2, 1, 666];
let heapSize;
// heapSort();
// console.log(arr);

function maxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
}
function maxHeapify(num) {
  let left = 2 * num + 1;
  let right = 2 * num + 2;
  let largest;
  if (left <= heapSize && arr[left] > arr[num]) {
    largest = left;
  } else {
    largest = num;
  }
  if (right <= heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != num) {
    let temp = arr[num];
    arr[num] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
}
function heapSort() {
  maxHeap();
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize--;
    maxHeapify(0);
  }
  return arr;
}

// quick sort
function partition(p, r) {
  let x = arr[r]; // pivot
  let i = p - 1;
  for (let j = p; j <= r - 1; j++) {
    if (arr[j] <= x) {
      i++;
      // swap arr[i] and arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  // swap arr[i+1] and arr[r]
  let temp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = temp;
  return i + 1;
}
function quickSort(p, r) {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
}
quickSort(0, arr.length - 1);
console.log(arr);

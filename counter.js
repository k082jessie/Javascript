function intersection(arr1, arr2) {
  let result = [];
  let length = Math.min(arr1.length, arr2.length);
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < length; i++) {
    if (arr1[i] === arr2[i]) {
      result.push(arr1[i]);
    }
  }
  console.log("intersection: " + [...new Set(result)]);
  return [...new Set(result)];
}

arr1 = [1, 2, 3, 3, 3];
arr2 = [5, 16, 1, 3, 3];
intersection(arr1, arr2);

function intersection2(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  console.log("intersection2: " + result);
  return result;
}

function intersection3(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};
  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }
  console.log(counter);
  // loop over the counter
  for (let property in counter) {
    if (counter[property] > 1) {
      result.push(property);
    }
  }
  console.log("intersection3: " + result);
  return result;
}
intersection3(arr1, arr2);

// Write a func that takes two strings and check if they have the same
// letters. (order doesn't matter)
function sameFrequency(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  if (str1.length !== str2.length) {
    return false;
  } else {
    let counter1 = {};
    let counter2 = {};
    for (let i = 0; i < arr1.length; i++) {
      if (counter1[arr1[i]]) {
        counter1[arr1[i]]++;
      } else {
        counter1[arr1[i]] = 1;
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (counter2[arr2[i]]) {
        counter2[arr2[i]]++;
      } else {
        counter2[arr2[i]] = 1;
      }
    }
    for (let property in counter1) {
      if (!counter2[property] || counter2[property] !== counter1[property]) {
        return false;
      }
    }
    return true;
  }
}
console.log(sameFrequency("acbc", "cabc"));

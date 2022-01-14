// Write a func that given a sorted array of int and a number.
// Find if there's any pair in the arr that has avg. of the given
// number. Find all of them. (there might be multiple pairs fit the condition)
function avgPair(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(arr[i], arr[j]);
      if ((arr[i] + arr[j]) / 2 == num) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(result);
  return result;
}
avgPair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

// two pointers
function avgPair2(arr, num) {
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    let temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg == num) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    } else if (temp_avg > num) {
      right--;
    } else {
      left++;
    }
  }
  console.log("avgPair2: " + result);
  return result;
}
avgPair2([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

// Write a func that checks if the input string is a palindrome.
// Palindrome is a word that can be read forwards and backwards.
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (right >= left) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      right--;
      left++;
    }
  }
  return true;
}
console.log(palindrome("amanaplanacanalpanama"));

// A subsequence of a string is a new string that is formed from the original
// string by deleting some (can be none) of the characters without disturbing
// the relative positions of the remaining characters
// Write a func that checks if one string is a subsequence of the other string
function isSubsequence(str1, str2) {
  if (str1.length == 0) {
    return true;
  }
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr2 < str2.length) {
    console.log(str1[ptr1], str2[ptr2]);
    if (str1[ptr1] == str2[ptr2]) {
      ptr1++;
    }
    if (ptr1 >= str1.length) {
      return true;
    }
    ptr2++;
  }
  return false;
}

// isSubsequence("hello", "hello Dear");
isSubsequence("book", "brooklyn");
console.log(isSubsequence("abc", "bac"));

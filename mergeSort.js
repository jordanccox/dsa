const merge = (arr1, arr2) => {
  const result = [];
  let leftArrLength = arr1.length;
  let rightArrLength = arr2.length;
  let i = 0;
  let j = 0;
 
  while (leftArrLength >= 1 && rightArrLength >= 1) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      leftArrLength--;
      i++;
    } else {
      result.push(arr2[j]);
      rightArrLength--;
      j++;
    }
  }

  while (leftArrLength > 0) {
    result.push(arr1[i]);
    leftArrLength--;
    i++;
  }

  while (rightArrLength > 0) {
    result.push(arr2[j]);
    rightArrLength--;
    j++;
  }
  
  return result;
};

const mergeSort = (arr, start, end) => {
  const length = end - start;
  const middleIndex = start + Math.floor(length / 2);

  if (length <= 1) {
    return [arr[start]];
  }

  const leftArr = mergeSort(arr, start, middleIndex);
  const rightArr = mergeSort(arr, middleIndex, end);
  
  const combinedArrays = merge(leftArr, rightArr);

  return combinedArrays;
};

// console.log(mergeSort([5, 4, 3, 2, 1], 0, [5, 4, 3, 2, 1].length));

const createRandomArray = (size) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(Math.round(Math.random() * 100));
  }

  return result;
};

const randArray = createRandomArray(10000000); //  time for 10 million: 5.031 seconds
const sortedArray = mergeSort(randArray, 0, randArray.length); 
console.log(sortedArray);
// console.log(randArray.sort()); // time for 10 million: 4.551 seconds

// const fs = require('fs');

// fs.writeFile("./fileExample.txt", sortedArray.toString(), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Array sorted");
//   }
// });
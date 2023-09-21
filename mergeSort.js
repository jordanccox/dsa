const merge = (arr1, arr2) => {
  const result = [];
 
  while (arr1.length >= 1 && arr2.length >= 1) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift())
    }
  }

  while (arr1.length > 0) {
    result.push(arr1.shift());
  }

  while (arr2.length > 0) {
    result.push(arr2.shift());
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
  for (let i = 0; i <= size; i++) {
    result.push(Math.round(Math.random() * 100));
  }

  return result;
};

const randArray = createRandomArray(100000);
const sortedArray = mergeSort(randArray, 0, randArray.length); 
console.log(sortedArray);

const fs = require('fs');

fs.writeFile("./fileExample.txt", sortedArray.toString(), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Array sorted");
  }
});
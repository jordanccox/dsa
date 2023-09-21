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

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const leftArr = arr.slice(0, Math.round(arr.length / 2));
  const rightArr = arr.slice(Math.round(arr.length / 2), arr.length);

  const leftSorted = mergeSort(leftArr);
  const rightSorted = mergeSort(rightArr);
  
  const combinedArrays = merge(leftSorted, rightSorted);

  return combinedArrays;
};

// console.log(mergeSort([5, 4, 3, 2, 1]));

const createRandomArray = (size) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(Math.round(Math.random() * 100));
  }

  return result;
};

// mergeSort(createRandomArray(1000000));

// createRandomArray(1000000).sort();

// .slice() and .shift() are killing performance

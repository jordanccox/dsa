const sortedArray = [ 12, 23, 34, 37, 45, 55, 56, 72, 89, 92, 99, 104, 112, 115, 116, 129, 134, 154, 158, 173, 177 ];

const binarySearch = (arr, numToFind) => {
  if (arr.length == 1) {
    if (arr[0] == numToFind) {
      return arr[0];
    }
    
    return null;
  }

  const leftArr = arr.slice(0, arr.length / 2);
  const rightArr = arr.slice(arr.length / 2, arr.length);

  let foundNumber;

  if (leftArr[leftArr.length - 1] == numToFind) {
    return leftArr[leftArr.length - 1];
  } else if (leftArr[leftArr.length - 1] > numToFind) {
    foundNumber = binarySearch(leftArr, numToFind);
  } else if (leftArr[leftArr.length - 1] < numToFind) {
    if (rightArr[0] == numToFind) {
      return rightArr[0];
    } else {
      foundNumber = binarySearch(rightArr, numToFind);
    }
  }

  if (!foundNumber) {
    return "No number found";
  }

  return foundNumber;
};

console.log(binarySearch(sortedArray, 373));
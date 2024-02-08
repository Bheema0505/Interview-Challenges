// JS Challenges For Interviews

//******** return given Array using loop **************
let Arr = [0, 1, 2, 3, 4, 5, 6];

for (let i = 0; i < Arr.length / 2; i++) {
  temp = Arr[i];
  Arr[i] = Arr[Arr.length - 1 - i];
  Arr[Arr.length - 1 - i] = temp;
}

console.log(Arr); // [ 6, 5, 4, 3, 2, 1, 0 ]

//******** return largest Number from an array **************

function returnMaxNum(arr) {
  return arr.reduce((acc, cur) => {
    return acc > cur ? acc : cur;
  });
}
console.log(returnMaxNum(Arr)); //6

//******** return second largest Number from an array **************

function returnSecondLargestValue(array) {
  let sortedArr = array.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
}
console.log(returnSecondLargestValue(Arr)); //5

//******** return missing Numbers from an array among the range **************

const Arr2 = [0, 1, 2, 4, 5, 6, 10];

function returnMissingNumbersFromRange(array) {
  let missingArrValues = [];
  const maxVal = Math.max(...array);
  const minVal = Math.min(...array);
  for (let i = minVal + 1; i < maxVal; i++) {
    if (!array.includes(i)) {
      missingArrValues.push(i);
    }
  }
  return missingArrValues;
}
console.log(returnMissingNumbersFromRange(Arr2)); // [ 3, 7, 8, 9 ]

//******** return duplicated elements from an array **************

const arr = [2, 3, 5, 6, 7, 2, 3, 2];
const dupVals = arr.filter(
  (elem, index, array) => array.indexOf(elem) !== index
);
let ms = new Set(dupVals);
let sdva = [...ms];

console.log(sdva); //[ 2, 3 ]

//******** return Sum Of ArrayElements (numbers) **************

function returnSumOfArrayElements(arr) {
  let res = arr.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur;
  });
  return res;
}

console.log(returnSumOfArrayElements(Arr)); //15

// *****  get Key value from an object  ******
const obj = {
  name: {
    age: {
      role: "react Dev",
      kind: "human",
    },
  },
};

function getResponsekey(pathArr, obj) {
  // let counter = 0;
  let val = pathArr.reduce((acc, val) => {
    // console.log("iteration --> ", counter++);
    // console.log("acc", acc, "val", val);
    return acc[val] ? acc[val] : null;
  }, obj);
  return val;
}
// console.log(getResponsekey(["name", "age", "role"], obj));

// ********************* flattening a 2d or 3d arrays *******

// 1. flattening any dimensional array using arr.foreach method and recursion
const multi_D_Array = [0, 1, [2, 3, 4], 5, 6, [7, 8, [9, 10]]];

function flattenTheMultiDArray(arr) {
  let flatArr = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      //   console.log("flatArr 1", flatArr);
      flatArr = flatArr.concat(flattenTheMultiDArray(element));
      //   console.log("flatArr", flatArr);
    } else {
      flatArr.push(element);
    }
  });

  return flatArr;
}
console.log(
  "flattening Multi Dimen using arr.foreach method and recursion",
  flattenTheMultiDArray(multi_D_Array)
);

//2. flattening 2d array using spread operator and concat method
let ThreeD_Array = [1, [2, 3], [4, 5, 6], [7, 8, [9, 10]]];
let TwoD_Array = [1, [2, 3], [4, 5, 6], [7, 8, 9], 10];

let flattenedArray = [].concat(...TwoD_Array);

console.log(
  "flattening 2d array using spread operator and concat method",
  flattenedArray
);

// 3. flattening 2d array using Built-In flat method

let flatteneArray = ThreeD_Array.flat(Infinity);
//flat method takes number of dimensions to be falttened
console.log(" flattening 3d array using Built-In flat method", flatteneArray);

// 4. flattening 2d array using arr.reduce method
const flattenThe2DArray = (arr) => {
  return arr.reduce((acc, subArr) => acc.concat(subArr), []);
};

console.log(
  " flattening 2d array using arr.reduce method ",
  flattenThe2DArray(TwoD_Array)
);

// 5. flattening 3d array using arr.reduce method
const flattenThe3DArray = (arr) => {
  return arr.reduce(
    (acc, subArr) =>
      Array.isArray(subArr)
        ? subArr.reduce((accum, cur) => accum.concat(cur), acc)
        : acc.concat(subArr),
    []
  );
};

console.log(
  " flattening 3d array using arr.reduce method ",
  flattenThe3DArray(ThreeD_Array)
);

// **************** finding first no-repeating character from given string ***********

let str = "bbhheemmaareddyy";
let str2 = "bhemareddy";

function findNonRepeatingChar(str) {
  if (typeof str === "string") {
    for (let i of str) {
      if (str.indexOf(i) === str.lastIndexOf(i)) {
        console.log("if", i);
        return i;
      }
    }
  } else {
    return "please feed the function with string";
  }
}
console.log("first no-repeating character is", findNonRepeatingChar(str));

// **************** finding first repeating character from given string ***********

function findRepeatingChar(str) {
  if (typeof str === "string") {
    for (let i of str) {
      if (str.indexOf(i) !== str.lastIndexOf(i)) {
        console.log("if", i);
        return i;
      }
    }
  } else {
    return "please feed the function with string";
  }
}
console.log("first repeating character is", findRepeatingChar(str2));

// **************** returning all repeated chars in an array from a given string ***********

function returnRepatingChars(str) {
  let repeatedChars = [];
  if (typeof str === "string") {
    for (let i of str) {
      if (str.indexOf(i) !== str.lastIndexOf(i)) {
        repeatedChars.push(i);
      }
    }
  } else {
    return "please feed the function with string";
  }
  return repeatedChars;
}
console.log(" Repating Chars array is", returnRepatingChars(str2));

// **************** returning all repeated chars in an array from a given string ***********

function returnNonRepatingChars(str) {
  let nonRepeatedChars = [];
  if (typeof str === "string") {
    for (let i of str) {
      if (str.indexOf(i) === str.lastIndexOf(i)) {
        nonRepeatedChars.push(i);
      }
    }
  } else {
    return "please feed the function with string";
  }
  return nonRepeatedChars;
}
console.log("Non Repating Chars array is", returnNonRepatingChars(str));

// ********** union (all unique values of both arrays)and intersection (common values ) of arrays *********

const Array1 = [1, 2, 3, 4, 5];
const Array2 = [4, 5, 6, 7, 8];

function returnUnionAndIntersection(arr1, arr2) {
  let intersectionArray = arr1.filter((elements) => arr2.includes(elements));

  let mySet = new Set();
  const mergedArray = arr1.concat(arr2);
  for (let i of mergedArray) {
    mySet.add(i);
  }
  let unionArray = [...mySet];
  return [unionArray, intersectionArray];
}
const res = returnUnionAndIntersection(Array1, Array2);
console.log("unionArray", res[0], "intersectionArray", res[1]);

// ********* removing nullish (NaN, undefined, null, 0, false) values from an array ***********

let nullishArr = [0, false, NaN, null, undefined, "bheema", true, 23];

function returnValidElemsFromArray(arr) {
  console.log(arr);
  return arr.filter((elem) => elem);
}
console.log(returnValidElemsFromArray(nullishArr));
//['bheema', true, 23]

// ********* find factotial of a given number ***********

// 1. using for Loop

function getFactorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i;
  }
  return res;
}
console.log(getFactorial(4)); // 4*3*2*1 = 24
console.log(getFactorial(0)); // 1
console.log(getFactorial(5)); // 5*4*3*2*1  =  120
// Big-O = O(n)

// 2. using Recursion

function getFactorialWithRec(n) {
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    return n * getFactorialWithRec(n - 1);
  } else {
    console.error("Invalid input. Please provide a non-negative integer.");
  }
}
console.log(getFactorialWithRec(4)); // 4*3*2*1 = 24
console.log(getFactorialWithRec(1)); // 1
console.log(getFactorialWithRec(5)); // 5*4*3*2*1  =  120
// Big-O = O(n)

// ********* printing Fibonacci numbers sequence ***********

// 1. using for Loop

function getFib(n) {
  let fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr;
}
console.log(getFib(5)); // 0, 1, 1, 3, 5
console.log(getFib(10)); // 0,  1,  1,  2,  3,  5, 8, 13, 21, 34
console.log(getFib(2)); // 0, 1
// Big-O = O(n)

// 2. using rescursion

function returnFibSeriesNumAtGivenPos(num) {
  if (num <= 1) {
    return num;
  }
  return (
    returnFibSeriesNumAtGivenPos(num - 1) +
    returnFibSeriesNumAtGivenPos(num - 2)
  );
}
console.log(returnFibSeriesNumAtGivenPos(0)); // Output: 0
console.log(returnFibSeriesNumAtGivenPos(1)); // Output: 1
console.log(returnFibSeriesNumAtGivenPos(2)); // Output: 1
console.log(returnFibSeriesNumAtGivenPos(3)); // Output: 2
console.log(returnFibSeriesNumAtGivenPos(6)); // Output: 8
// Big-O = O(2^n)

// ********* Given Number is Prime or Not ***********

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(19)); // true
console.log(isPrime(21)); // false
console.log(isPrime(23)); // true

// ********* Linear Search ***********

function LinearSearchAndReturnTargetPosition(arr, tar) {
  //   return arr.findIndex((elem)=> elem === tar)
  // return arr.indexOf(tar)

  for (let i in arr) {
    // console.log(i)
    if (arr[i] === tar) {
      return i;
    }
  }
}
console.log(LinearSearchAndReturnTargetPosition([1, 35, 66, 99, 45, 425], 45)); // 4
console.log(LinearSearchAndReturnTargetPosition([45, 65, 646, 45, 64], 65)); // 1
console.log(LinearSearchAndReturnTargetPosition([45, 5234, 654, 864, 67], 864)); // 3
console.log(LinearSearchAndReturnTargetPosition([45, 5234, 654, 864, 67], 999)); // -1
// Big-O = O(n)

// ********* Binary Search ***********

// 1. using while loop

function binarySearchAndReturnTargetPosition(arr, tar) {
  let leftInd = 0;
  let rightInd = arr.length - 1;
  while (leftInd <= rightInd) {
    let middle = Math.floor((leftInd + rightInd) / 2);
    if (arr[middle] === tar) {
      return middle;
    } else if (tar > arr[middle]) {
      leftInd = middle + 1;
    } else if (tar < arr[middle]) {
      rightInd = middle - 1;
    }
  }
  return -1;
}
console.log(binarySearchAndReturnTargetPosition([1, 35, 66, 99, 145, 425], 99)); // 3
console.log(binarySearchAndReturnTargetPosition([1, 35, 66, 99, 145, 425], 35)); // 1
console.log(
  binarySearchAndReturnTargetPosition([1, 35, 66, 99, 145, 425], 425)
); // 5

// Big-O = O(logn)

// 2. using Recursion

function binarySearchAndReturnTargetPositionWithRecursion(arr, tar) {
  return binarysearch(arr, tar, 0, arr.length - 1);
}
function binarysearch(arr, tar, leftInd, rightInd) {
  let middle = Math.floor((leftInd + rightInd) / 2);
  if (arr[middle] === tar) {
    return middle;
  }
  if (leftInd > rightInd) {
    return -1;
  }
  if (tar > arr[middle]) {
    return binarysearch(arr, tar, middle + 1, rightInd);
  } else if (tar < arr[middle]) {
    return binarysearch(arr, tar, leftInd, middle - 1);
  }
}
console.log(
  binarySearchAndReturnTargetPositionWithRecursion(
    [1, 35, 66, 99, 145, 425],
    99
  )
); // 3
console.log(
  binarySearchAndReturnTargetPositionWithRecursion(
    [1, 35, 66, 99, 145, 425],
    869
  )
); // -1
console.log(
  binarySearchAndReturnTargetPositionWithRecursion(
    [1, 35, 66, 99, 145, 425],
    425
  )
); // 5

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b"

function backspaceCompare(s, t) {
  function processString(str) {
    const result = [];
    for (const char of str) {
      if (char === "#") {
        result.pop();
      } else {
        result.push(char);
      }
    }
    return result.join("");
  }

  return processString(s) === processString(t);
}

// Example usage:
const example1 = backspaceCompare("ab#c", "ad#c");
console.log(example1); // Output: true

const example2 = backspaceCompare("ab##", "c#d#");
console.log(example2); // Output: true

const example3 = backspaceCompare("a#c", "b");
console.log(example3); // Output: false

// 1. **Row by Row**: In this approach, you traverse each row from left to right, then move to the next row and continue until you reach the end of the matrix.

// 2. **Column by Column**: Similar to the previous approach, but you traverse each column from top to bottom.

// 3. **Diagonal Traversal**: You start from the top left corner and move diagonally downwards until you reach the bottom. Then you move one step to the right and continue the diagonal traversal until you reach the end.

// 4. **Zigzag Traversal**: You alternate between traversing rows from left to right and right to left.

// 5. **Spiral Order Traversal (Clockwise and Counterclockwise)**: As demonstrated earlier, you traverse the matrix in a spiral pattern either clockwise or counterclockwise.

// Each of these algorithms can be implemented in various programming languages and can be adapted to specific requirements. Depending on the interview context, you might be asked to implement any of these or similar traversal algorithms. It's essential to understand the underlying logic and be able to adapt it to different scenarios.

let arrForSpiralAlgo = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9],
];

function printSpiralOrder(arr) {
  let result = [];
  let topRow = 0,
    bottomRow = arr.length - 1;
  let leftCol = 0,
    rightCol = arr[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Traverse top row from left to right
    for (let i = leftCol; i <= rightCol; i++) {
      result.push(arr[topRow][i]);
    }
    topRow++;

    // Traverse right column from top to bottom
    for (let i = topRow; i <= bottomRow; i++) {
      result.push(arr[i][rightCol]);
    }
    rightCol--;

    // Check if there are more rows to traverse
    if (topRow <= bottomRow) {
      // Traverse bottom row from right to left
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(arr[bottomRow][i]);
      }
      bottomRow--;
    }

    // Check if there are more columns to traverse
    if (leftCol <= rightCol) {
      // Traverse left column from bottom to top
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(arr[i][leftCol]);
      }
      leftCol++;
    }
  }

  console.log(result.join(", "));
}

printSpiralOrder(arrForSpiralAlgo);

// let nums = ["abc", "hello", "c", "d", "abc", "c", "d"];

// let obj = {};

// for (const arrVAl of nums) {
//   if (!obj[arrVAl]) {
//     obj[arrVAl] = true;
//   }
// }

// for (const key in obj) {
//   console.log(key);
// }

// function swap(nums, i, j) {
//   let temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }

// let array = [5, 9, 1, 8, 2, 3];

// let i = 0;
// let j = array.length - 1;

// while (i <= j) {
//   swap(array, i, j);
//   i++;
//   j--;
// }

// console.log(array);

// let result = [];
// let i = 0;
// let j = 0;
// let k = 0;

// function merge(m, nums1, n, nums2) {
//   while (i < m && j < n) {
//     if (nums1[i] < nums2[j]) {
//       result[k] = nums1[i];
//       i++;
//       k++;
//     } else {
//       result[k] = nums2[j];
//       j++;
//       k++;
//     }
//   }

//   while (i < m) {
//     result[k] = nums1[i];
//     i++;
//     k++;
//   }

//   while (j < n) {
//     result[k] = nums2[j];
//     j++;
//     k++;
//   }

//   return result;
// }

// const output = merge(3, [1, 2, 3, 0, 0, 0], 3, [2, 5, 6]);
// console.log(output);

// var maxProfit = function (prices) {
//   let currMin = prices[0];
//   let profit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > currMin) {
//       profit = Math.max(profit, prices[i] - currMin);
//     }

//     if (prices[i] < currMin) {
//       currMin = prices[i];
//     }
//   }
//   return profit;
// };

// const output = maxProfit([7, 1, 5, 3, 6, 4]);
// console.log(output);

// let currentVal = 0;
// let i;

// var findMaxConsecutiveOnes = function (nums) {
//   for (i = 0; i <= nums.length - 1; i++) {
//     if (currentVal == nums[i]) {
//       currentVal += nums[i];
//       i++;
//     } else {
//       currentVal = nums[i];
//       i++;
//     }
//     return currentVal;
//   }
// };

// const output = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
// console.log(output);

// let currentVal = 0;
// let i;

// var findMaxConsecutiveOnes = function (nums) {
//   let maxConsecutiveOnes = 0;

//   for (i = 0; i <= nums.length - 1; i++) {
//     if (nums[i] === 1) {
//       currentVal += 1;
//       maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentVal);
//     } else {
//       currentVal = 0;
//     }
//   }

//   return maxConsecutiveOnes;
// };

// const output = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 1, 1]);
// console.log(output);

// var containsDuplicate = function (nums) {
//   let currentVal = null;
//   let result = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (!currentVal[nums[i]]) {
//       result = true;
//     } else {
//       result = false;
//     }
//   }
//   return result;
// };

// const output = containsDuplicate([1, 2, 3, 4, 5, 1]);
// console.log(output);

// var containsDuplicate = function (nums) {
//   let currentVal = {};
//   let result = false;

//   for (let i = 0; i < nums.length; i++) {
//     if (currentVal[nums[i]]) {
//       result = true;
//       break;
//     } else {
//       currentVal[nums[i]] = true;
//     }
//   }
//   return result;
// };

// const output = containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(output);

// let nums = [0, 1, 0, 8, 12];
// let i = nums[i];
// let j = nums[i + 1];
// let result = [];
// let k;

// for (const val of nums) {
//   if (val.contains("0")) {
//     result.push(val);
//   }
// }

// console.log(result);

// Q. 448. Find All Numbers Disappeared in an Array

// var findDisappearedNumbers = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let x = Math.abs(nums[i]);
//     let makeNegate = x - 1;
//     if (nums[makeNegate] > 0) {
//       nums[makeNegate] *= -1;
//     }
//   }

//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       result.push(i + 1);
//     }
//   }
//   return result;
// };

// const output = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
// console.log(output);

// Q. Given an array arranged in ascending order. And a target value. Find the total number of that sum upto the target.

// function countSum(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let count = 0;

//   while (start < end) {
//     if (arr[start] + arr[end] > target) {
//       end--;
//     } else if (arr[start] + arr[end] < target) {
//       start++;
//     } else {
//       if (arr[start] == arr[end]) {
//         let freq = end - start + 1;
//         count += Math.floor((freq * (freq - 1)) / 2);
//         return count;
//       } else {
//         let x = 0,
//           y = 0;
//         let a_s = arr[start];
//         while (arr[start] == a_s) {
//           start++;
//           x++;
//         }
//         let a_e = arr[end];
//         while (arr[end] == a_e) {
//           end--;
//           y++;
//         }
//         count += x * y;
//       }
//     }
//   }
//   return count;
// }

// let arr = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 7, 8, 8];
// let target = 8;

// console.log(countSum(arr, target));

// Q. Write a function that reverses a string. The input string is given as an array of characters

// function swap(nums, i, j) {
//   let temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }

// var reverseString = function (arr) {
//   let i = 0;
//   let j = arr.length - 1;

//   while (i <= j) {
//     swap(arr, i, j);
//     i++;
//     j--;
//   }
// };

// const arr = [4, 5, 1, 2];
// reverseString(arr);
// console.log(arr);

// function getMinMax(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return [min, max];
// }

// // Example usage:
// const arr = [3, 2, 1, 56, 10000, 167];
// const [min, max] = getMinMax(arr);
// console.log("Minimum:", min);
// console.log("Maximum:", max);

// var twoSum = function (numbers, target) {
//   let start = 0;
//   let end = numbers.length - 1;

//   while (start < end) {
//     if (numbers[start] + numbers[end] > target) {
//       end--;
//     } else if (numbers[start] + numbers[end] < target) {
//       start++;
//     } else {
//       return [start, end];
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// const secondLargestElement = arr => {
//   let largest = Number.NEGATIVE_INFINITY;
//   let secondLargest = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] != largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// };

// console.log(secondLargestElement([12, 35, 1, 10, 34, 1, 32, 34.5]));

// let arr = Array(5);

// for (let i = 0; i < 5; i++) {
//   let inner = Array(6).fill(0);
//   arr[i] = inner;
// }

// console.log(arr);

// function display(grid) {
//   let str = "";
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       str += grid[i][j] + " ";
//     }
//   }
//   return str;
// }

// const arr = [
//   [0, 1, 2, 3],
//   [4, 5, 6, 7],
//   [8, 9, 10, 11],
//   [12, 13, 14, 15],
// ];

// console.log(display(arr));

// Q. Given a 2d array , print it in a column wave form.

// function display(grid, m, n) {
//   let str = "";

//   for (let col = 0; col < n; col++) {
//     if (col % 2 == 0) {
//       for (let row = 0; row < m; row++) {
//         str += grid[row][col] + " ";
//       }
//     } else {
//       for (let row = m - 1; row >= 0; row--) {
//         str += grid[row][col] + " ";
//       }
//     }
//   }
//   return str;
// }

// const arr = [
//   [0, 1, 2, 3],
//   [4, 5, 6, 7],
//   [8, 9, 10, 11],
//   [12, 13, 14, 15],
// ];
// console.log(display(arr, 4, 4));

// var transpose = function (matrix) {
//   let str = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (j = 0; j < matrix.length; j++) {
//       str += matrix[j][i] + " ";
//     }
//   }
//   return str;
// };

// console.log(
//   transpose([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );

// Merge two sorted arrays

// var maxProfit = function (prices) {
//   let currMin = prices[0];
//   let profit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < currMin) {
//       currMin = prices[i];
//     }

//     if (prices[i] > currMin) {
//       profit = Math.max(profit, prices[i] - currMin);
//     }
//   }
//   return profit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// var twoSum = function (nums, target) {
//   let i = nums[i];
//   let j = nums.length - 1;

//   while (i <= j) {
//     if (nums[i] + nums[j] === target) {
//       return nums.indexOf(nums[i], nums[j]);
//     } else {
//       i++;
//       j++;
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// function createNode(value) {
//   return {
//     data: value,
//     next: null,
//   };
// }

// function display(head) {
//   let temp = head;

//   while (temp != null) {
//     console.log(temp.data);
//     temp = temp.next;
//   }
// }

// function addAtHead(head, data) {
//   let newNode = createNode(data);
//   newNode.next = head;
//   head = newNode;
//   return newNode;
// }

// function addAtTail(head, data) {
//   let temp = head;
//   while (temp.next != null) {
//     temp = temp.next;
//   }

//   let newNode = createNode(data);
//   temp.next = newNode;
//   return head;
// }

// let head = null;

// head = addAtHead(head, 10);
// head = addAtHead(head, 20);
// head = addAtTail(head, 70);
// head = addAtHead(head, 30);
// head = addAtHead(head, 40);
// head = addAtHead(head, 50);
// head = addAtHead(head, 60);

// display(head);

// var largestOddNumber = nums => {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (+nums[i] % 2 !== 0) {
//       return nums.slice(0, i + 1);
//     }
//   }
//   return "";
// };

// console.log(largestOddNumber("374585"));

// const employeesDetail = {
//   eid: 101,
//   ename: "Random",
// };

// console.log(JSON.stringify(employeesDetail));

const callApi = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const json = await data.json();
  console.log(json);
};

callApi();

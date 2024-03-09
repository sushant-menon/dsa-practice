const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (arr of array) {
//   var a = (arr += arr);
//   console.log(a);
// }

const b = array.reduce((x, y) => {
  return x + y;
});
console.log(b);

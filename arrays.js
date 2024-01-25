const arr = [1, 2, 3, 'four', 'five'];
console.log(typeof arr);
console.log('===== push =====');
let res = arr.push(42, 81, 99);
console.log(arr);
console.log(res);
console.log('===== pop =====');
res = arr.pop();
console.log(arr);
console.log(res);
console.log('===== shift =====');
res = arr.shift();
console.log(arr);
console.log(res);
console.log('===== unshift =====');
res = arr.unshift(0, 1);
console.log(arr);
console.log(res);
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
console.log('===== concat =====');
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(arr1);
console.log(arr2);
console.log('===== slice =====');
res = arr.slice(2, 6);
console.log(arr);
console.log(res);
console.log('===== splice =====');
// arr.splice(1, 2);
// arr.splice(1, 2, -10, -20, -30);
// arr.splice(0, 1); //arr.shift()
// arr.splice(0, 0, -10, -20); //arr.unshift(-10, -20)
// arr.splice(arr.length - 1, 1); //arr.pop()
arr.splice(arr.length, 0, 100500); //arr.push(100500)
console.log(arr);
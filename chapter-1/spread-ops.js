const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4));  // 10

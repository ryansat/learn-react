// module.js
export const hello = "world";
export default function() {
  console.log("Hello, world!");
}

// main.js
import myFunc, { hello } from './module';
console.log(hello);  // "world"
myFunc();  // "Hello, world!"

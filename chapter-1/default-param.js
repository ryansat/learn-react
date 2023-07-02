const greet = (name = "World") => `Hello, ${name}!`;
console.log(greet());  // Hello, World!
console.log(greet("User"));  // Hello, User!

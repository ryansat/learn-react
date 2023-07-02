class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const bob = new Person("Bob", 30);
  bob.introduce();  // "Hello! My name is Bob and I'm 30 years old."
  
Absolutely! Here's a beginner-friendly TypeScript "cheat sheet":

1. **Installation:**
   - Install TypeScript globally on your system using npm:
   ```bash
   npm install -g typescript
   ```

2. **Compiling TypeScript:**
   - TypeScript is a superset of JavaScript, so it needs to be compiled down to JavaScript before it can run in a browser or on a server. You can do this using the TypeScript compiler (`tsc`):
   ```bash
   tsc myfile.ts
   ```

3. **Basic Types:**
   - TypeScript includes several data types that you can use to declare variables:
   ```typescript
   let isDone: boolean = false;
   let decimal: number = 6;
   let color: string = "blue";
   let list: number[] = [1, 2, 3];
   let x: [string, number] = ["hello", 10];  // Tuple
   ```

4. **Enum:**
   - An enum is a way of giving more friendly names to sets of numeric values:
   ```typescript
   enum Color {Red, Green, Blue}
   let c: Color = Color.Green;
   ```

5. **Any:**
   - You can use the `any` type if you're not sure what type a value is going to be:
   ```typescript
   let notSure: any = 4;
   notSure = "maybe a string instead";
   ```

6. **Functions:**
   - TypeScript provides static types for function parameters and return values:
   ```typescript
   function add(x: number, y: number): number {
     return x + y;
   }
   ```

7. **Interfaces:**
   - Interfaces are a powerful way to define contracts within your code. They can be used to define the shape of an object:
   ```typescript
   interface Person {
     firstName: string;
     lastName: string;
   }
   ```

8. **Classes:**
   - TypeScript supports object-oriented programming and includes classes:
   ```typescript
   class Greeter {
     greeting: string;
     constructor(message: string) {
       this.greeting = message;
     }
     greet() {
       return "Hello, " + this.greeting;
     }
   }
   ```

9. **Generics:**
   - Generics provide a way to make components work with any data type and not restrict to one data type:
   ```typescript
   function identity<T>(arg: T): T {
     return arg;
   }
   ```

10. **Modules:**
    - TypeScript also has its own set of modules. A module can contain both code and declarations:
    ```typescript
    // math.ts
    export function add(x: number, y: number): number {
      return x + y;
    }

    // main.ts
    import { add } from './math';
    console.log(add(1, 2));  // 3
    ```

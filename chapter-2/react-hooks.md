Sure, here's a basic cheat sheet for the most commonly used React Hooks:

1. **useState:**
   - Allows you to add React state to function components.
   - Initialization:
   ```jsx
   const [state, setState] = React.useState(initialState);
   ```
   - Usage:
   ```jsx
   setState(newState);
   ```

2. **useEffect:**
   - Lets you perform side effects in function components.
   - Initialization and usage:
   ```jsx
   React.useEffect(() => {
     // side effect
   }, [dependencies]);
   ```

3. **useContext:**
   - Accepts a context object and returns the current context value.
   - Initialization and usage:
   ```jsx
   const value = React.useContext(MyContext);
   ```

4. **useReducer:**
   - An alternative to useState that accepts a reducer of type `(state, action) => newState` and returns the current state paired with a dispatch method.
   - Initialization:
   ```jsx
   const [state, dispatch] = React.useReducer(reducer, initialArg, init);
   ```
   - Usage:
   ```jsx
   dispatch(action);
   ```

5. **useCallback:**
   - Returns a memoized version of the callback that only changes if one of the dependencies has changed.
   - Initialization and usage:
   ```jsx
   const memoizedCallback = React.useCallback(() => {
     // your function
   }, [dependencies]);
   ```

6. **useMemo:**
   - Returns a memoized value.
   - Initialization and usage:
   ```jsx
   const memoizedValue = React.useMemo(() => computeExpensiveValue(a, b), [a, b]);
   ```

7. **useRef:**
   - Returns a mutable ref object whose `.current` property is initialized to the passed argument.
   - Initialization and usage:
   ```jsx
   const refContainer = React.useRef(initialValue);
   ```

8. **useImperativeHandle:**
   - Customizes the instance value that is exposed to parent components when using `ref`.
   - Initialization and usage:
   ```jsx
   useImperativeHandle(ref, createHandle, [deps])
   ```

9. **useLayoutEffect:**
   - The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
   - Initialization and usage:
   ```jsx
   React.useLayoutEffect(() => {
     // effect
   }, [dependencies]);
   ```

10. **useDebugValue:**
    - Can be used to display a label for custom hooks in React DevTools.
    - Initialization and usage:
    ```jsx
    React.useDebugValue(value);
    ```

And here's a simple example of how you might use the `useState` and `useEffect` hooks in a component:

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
```
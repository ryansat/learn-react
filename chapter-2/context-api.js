import React, { useState, useContext, createContext } from "react";

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const Counter = () => {
  const { count, setCount } = useContext(CountContext);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export const App = () => (
  <CountProvider>
    <Counter />
  </CountProvider>
);

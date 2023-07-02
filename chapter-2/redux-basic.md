Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. 

Here are some of the main concepts:

1. **Actions:** Actions are plain JavaScript objects that have a `type` field. They are the only way to send data from your application to your Redux store.

2. **Reducers:** Reducers specify how the application's state changes in response to actions sent to the store.

3. **Store:** The store brings together the actions and reducers, holding application state, allows access to state via `getState()`, allows state to be updated via `dispatch(action)`, and registers listeners via `subscribe(listener)`.

4. **Middleware:** It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

Here is a basic cheat sheet:

1. **Creating a Store:**
    ```jsx
    import { createStore } from 'redux';
    const store = createStore(reducer);
    ```

2. **Defining Actions:**
    ```jsx
    const action = {
      type: 'ACTION_TYPE',
      payload: {} // optional data
    };
    ```

3. **Defining a Reducer:**
    ```jsx
    function reducer(state = initialState, action) {
      switch(action.type) {
        case 'ACTION_TYPE':
          // code to handle ACTION_TYPE
          return newState;
        default:
          return state;
      }
    }
    ```

4. **Dispatching Actions:**
    ```jsx
    store.dispatch(action);
    ```

5. **Subscribing to Store Updates:**
    ```jsx
    const unsubscribe = store.subscribe(() => {
      console.log(store.getState());
    });
    ```

6. **Unsubscribing from Store Updates:**
    ```jsx
    unsubscribe();
    ```

7. **Applying Middleware:**
    ```jsx
    import { createStore, applyMiddleware } from 'redux';
    const store = createStore(reducer, applyMiddleware(middleware));
    ```
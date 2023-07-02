import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// This is your reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

const Counter = (props) => (
  <div>
    <p>{props.count}</p>
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const App = () => (
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>
);

export default App;

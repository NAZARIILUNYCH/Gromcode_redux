import { createStore } from "redux";

const increment = "COUNTER/INCREMENT";
const decrement = "COUNTER/DECREMENT";

const incrementActionCreator = () => ({
  type: increment,
});

const decrementActionCreator = () => ({
  type: decrement,
});

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case increment:
      return state + 1;

    case decrement:
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.dispatch(incrementActionCreator());
store.dispatch(incrementActionCreator());
store.dispatch(decrementActionCreator());

import React, { useReducer } from "react";

interface State {
  count: number;
}

enum ACTION_KIND {
  INCREMENT,
  DECREMENT,
}
interface Action {
  type: ACTION_KIND;
  payload?: any;
}

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_KIND.INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case ACTION_KIND.DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};

function CounterMain() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: ACTION_KIND.INCREMENT, payload: 1 })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: ACTION_KIND.DECREMENT, payload: 1 })}
      >
        Decrement
      </button>
    </div>
  );
}

export default CounterMain;

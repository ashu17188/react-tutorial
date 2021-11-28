import React, { ReducerAction } from "react";
import { Action, ACTIONS } from "../CalculatorMain";

function OperationButton(props: {
  dispatch: React.Dispatch<Action>;
  operation: String;
}) {
  return (
    <button
      onClick={() =>
        props.dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: props.operation },
        })
      }
    >
      {props.operation}
    </button>
  );
}

export default OperationButton;

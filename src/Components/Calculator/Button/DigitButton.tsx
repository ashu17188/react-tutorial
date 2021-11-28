import React from "react";
import { Action, ACTIONS } from "../CalculatorMain";

function DigitButton(props: {
  dispatch: React.Dispatch<Action>;
  digit: String;
}) {
  return (
    <button
      onClick={() =>
        props.dispatch({
          type: ACTIONS.ADD_DIGIT,
          payload: { digit: props.digit },
        })
      }
    >
      {props.digit}
    </button>
  );
}

export default DigitButton;

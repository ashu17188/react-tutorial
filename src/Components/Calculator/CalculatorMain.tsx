import React, { useReducer } from "react";
import OperationButton from "./Button/OperationButton";
import DigitButton from "./Button/DigitButton";
import "./CalculatorMain.scss";
export enum ACTIONS {
  ADD_DIGIT,
  CHOOSE_OPERATION,
  CLEAR,
  DELETE_DIGIT,
  EVALUATE,
}

interface State {
  currentOperand: any;
  previousOperand: any;
  operation: any;
  overwrite?: boolean;
}

export interface Action {
  type: ACTIONS;
  payload?: any;
}

const reducer = (state: State = INITIAL_STATE, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand === null) {
        return {
          ...state,
          currentOperand: `0.`,
        };
      }
      if (payload.digit === "." && state.currentOperand?.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CLEAR:
      return {} as State;

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.overwrite === false) return { ...state };

      if (state.currentOperand?.length === 1) {
        return { ...state, currentOperand: null };
      }
      return {
        ...state,
        currentOperand: state.currentOperand?.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: action.payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    default:
      return state;
  }
  return state;
};

const evaluate = (state: State) => {
  const prev = parseFloat(state.previousOperand || "");
  const current = parseFloat(state.currentOperand || "");
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = 0;

  switch (state.operation) {
    case "+":
      computation = prev + current;
      computation = parseFloat(computation.toFixed(2));
      break;

    case "-":
      computation = prev - current;
      computation = parseFloat(computation.toFixed(2));
      break;
    case "*":
      computation = prev * current;
      computation = parseFloat(computation.toFixed(2));
      break;
    case "÷":
      computation = prev / current;
      computation = parseFloat(computation.toFixed(2));
      break;
  }
  return computation.toString();
};

const INTEGER_FORMATTER = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
});

const formatOperand = (operand: any) => {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");

  if (decimal == null) {
    return INTEGER_FORMATTER.format(parseInt(integer));
  }
  return `${INTEGER_FORMATTER.format(parseInt(integer))}.${decimal}`;
};
const INITIAL_STATE: State = {
  currentOperand: null,
  previousOperand: null,
  operation: "",
};
const CalculatorMain = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(state.previousOperand)}
          {state.operation}
        </div>
        <div className="current-operand">
          {formatOperand(state.currentOperand)}
        </div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
      >
        DEL
      </button>
      <OperationButton dispatch={dispatch} operation="÷"></OperationButton>
      <DigitButton dispatch={dispatch} digit="1"></DigitButton>
      <DigitButton digit="2" dispatch={dispatch}></DigitButton>
      <DigitButton digit="3" dispatch={dispatch}></DigitButton>
      <OperationButton operation="*" dispatch={dispatch}></OperationButton>
      <DigitButton digit="4" dispatch={dispatch}></DigitButton>
      <DigitButton digit="5" dispatch={dispatch}></DigitButton>
      <DigitButton digit="6" dispatch={dispatch}></DigitButton>
      <OperationButton operation="+" dispatch={dispatch}></OperationButton>
      <DigitButton digit="7" dispatch={dispatch}></DigitButton>
      <DigitButton digit="8" dispatch={dispatch}></DigitButton>
      <DigitButton digit="9" dispatch={dispatch}></DigitButton>
      <OperationButton operation="-" dispatch={dispatch}></OperationButton>
      <DigitButton digit="." dispatch={dispatch}></DigitButton>
      <DigitButton digit="0" dispatch={dispatch}></DigitButton>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </div>
  );
};

export default CalculatorMain;

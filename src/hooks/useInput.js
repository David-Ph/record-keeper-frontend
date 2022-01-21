import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "BLUR") {
    return { ...state, isTouched: true };
  }

  if (action.type === "CHANGE") {
    return { ...state, value: action.value };
  }

  if (action.type === "RESET") {
    return initialInputState;
  }

  return initialInputState;
};

function useInput(validationFn) {
  const [inputState, inputDispatcher] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const validity = validationFn(inputState.value); // {isValid: boolean, message: string}
  const hasError = !validity.isValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    inputDispatcher({
      type: "CHANGE",
      value: event.target.value,
    });
  };

  const setValueHandler = (newValue) => {
    inputDispatcher({
      type: "CHANGE",
      value: newValue,
    });
  };

  const valueInputBlurHandler = (event) => {
    inputDispatcher({ type: "BLUR" });
  };

  const resetInput = () => {
    inputDispatcher({ type: "RESET" });
  };

  return {
    value: inputState.value,
    validity,
    hasError,
    resetInput,
    setValueHandler,
    valueChangeHandler,
    valueInputBlurHandler,
  };
}

export default useInput;

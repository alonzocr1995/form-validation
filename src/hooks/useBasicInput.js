import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return initialState;
};

const useBasicInput = (validateInput) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const isValid = validateInput(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const handleInputChange = (e) => {
    dispatch({ type: "CHANGE", value: e.target.value });
  };
  const handleInputBlur = () => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isTouched: inputState.isTouched,
    isValid,
    hasError,
    handleInputBlur,
    handleInputChange,
    reset,
  };
};

export default useBasicInput;

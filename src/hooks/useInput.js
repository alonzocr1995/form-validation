import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const handleValueChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsTouched(true);
  };

  const resetForm = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    isTouched,
    handleInputBlur,
    handleValueChange,
    resetForm,
  };
};

export default useInput;

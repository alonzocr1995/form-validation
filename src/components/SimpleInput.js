import React from "react";
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameInputIsValid,
    hasError: nameInputHasError,
    handleValueChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    resetForm: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    handleValueChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    resetForm: resetEmailInput,
  } = useInput((value) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value
    )
  );

  let formIsValid = false;

  if (enteredNameInputIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (!enteredNameInputIsValid && !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const enteredNameClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const enteredEmailClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleFormSubmission}>
      <div className={enteredNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={handleNameBlur}
          onChange={handleNameChange}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className={enteredEmailClasses}>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
        />
      </div>
      {emailInputHasError && (
        <p className="error-text">Email must be input correctly</p>
      )}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import React from "react";
import useBasicInput from "../hooks/useBasicInput";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    handleInputChange: handleNameInputChange,
    handleInputBlur: handleNameInputBlur,
    reset: resetName,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    handleInputChange: handleLastNameInputChange,
    handleInputBlur: handleLastNameInputBlur,
    reset: resetLastName,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    handleInputChange: handleEmailInputChange,
    handleInputBlur: handleEmilInputBlur,
    reset: resetEmail,
  } = useBasicInput((value) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value
    )
  );

  let formIsValid = false;

  if (nameInputIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(enteredName, enteredLastName);
    resetName();
    resetLastName();
    resetEmail();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleFormSubmission}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={handleNameInputChange}
            onBlur={handleNameInputBlur}
          />
          {nameInputHasError && <p>Name can't be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastName}
            onChange={handleLastNameInputChange}
            onBlur={handleLastNameInputBlur}
          />
          {lastNameInputHasError && <p>Lastname can't be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={handleEmilInputBlur}
          onChange={handleEmailInputChange}
        />
        {emailInputHasError && <p>Enter a valid E-mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;

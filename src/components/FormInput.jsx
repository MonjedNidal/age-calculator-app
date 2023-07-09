import React, { useState, useEffect } from "react";

function FormInput({
  isInputValid,
  setIsInputValid,
  labelText,
  placeholder,
  pattern,
  errorMessege,
  setInputValue,
}) {
  const currentYear = new Date().getFullYear();
  const [errorMessegeText, setErrorMessegeText] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsInputValid(validateInput(value));
  };

  const validateInput = (value) => {
    if (!value) {
      setErrorMessegeText("This field is required");
      return false;
    }
    if (labelText === "year") {
      const numpersPattern = /[a-zA-Z]/;
      if (numpersPattern.test(value)) {
        setErrorMessegeText(errorMessege);
        return false;
      } else if (value >= currentYear) {
        setErrorMessegeText(errorMessege);
        return false;
      } else {
        setErrorMessegeText("");
        return true;
      }
    }
    const regexPattern = new RegExp(pattern);
    if (!regexPattern.test(value)) {
      setErrorMessegeText(errorMessege);
    }
    return regexPattern.test(value);
  };

  const inputLabel = !isInputValid ? "invalid" : "";
  const inputValidateClass = isInputValid ? "validInput" : "invalidInput";

  useEffect(() => {
    if (!isInputValid) {
      setErrorMessegeText("This field is required");
    }
  }, [isInputValid]);

  return (
    <div className="d-flex flex-column">
      <label className={inputLabel}>{labelText}</label>
      <input
        className={inputValidateClass}
        pattern={pattern}
        onChange={handleInputChange}
        type="text"
        placeholder={placeholder}
      />
      {!isInputValid ? (
        <span className="errorMessege">{errorMessegeText}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default FormInput;

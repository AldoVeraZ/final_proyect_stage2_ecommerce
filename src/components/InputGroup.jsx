import React, { useState } from "react";

function InputGroup({
  id,
  inputLabel,
  inputType = "text",
  onChange = () => {},
  validation = () => "",
  values,
  error,
  ...props
}) {
  const [localError, setLocalError] = useState("");

  const validatedOnChange = (e) => {
    onChange(e);
    setLocalError(validation(e.target.value));
  };

  return (
    <div
      className={`input-group__container${
        inputType === "checkbox" ? " input-group__checkbox" : ""
      }`}
    >
      <label htmlFor={id}>{inputLabel}</label>
      {inputType === "textarea" ? (
        <textarea
          id={id}
          name={id}
          type={inputType}
          onChange={validatedOnChange}
          value={values[id]}
          className={`input-group__input${error || localError ? " error" : ""}`}
          {...props}
        ></textarea>
      ) : (
        <input
          id={id}
          name={id}
          type={inputType}
          onChange={validatedOnChange}
          value={inputType !== "file" ? values[id] : ""}
          className={`input-group__input${error || localError ? " error" : ""}`}
          {...props}
        />
      )}
      <span className="input-group__text-error">{error || localError}</span>
    </div>
  );
}

export default InputGroup;

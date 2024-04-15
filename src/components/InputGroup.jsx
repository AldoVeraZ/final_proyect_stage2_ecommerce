import React, { useState } from "react";

function InputGroup({
  id,
  inputLabel,
  inputType = "text",
  onChange = () => {},
  validation = () => "",
  values,
}) {
  const [error, setError] = useState("");

  const validatedOnChange = (e) => {
    onchange(e);
    setError(validation(e.target.value));
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
          className={`input-group__input${error ? " error" : ""}`}
        ></textarea>
      ) : (
        <input
          id={id}
          name={id}
          type={inputType}
          onChange={validatedOnChange}
          value={values[id]}
          className={`input-group__input${error ? " error" : ""}`}
        />
      )}
    </div>
  );
}

export default InputGroup;

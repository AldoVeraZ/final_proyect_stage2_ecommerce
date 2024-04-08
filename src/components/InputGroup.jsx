import React from "react";

function InputGroup({ id, inputLabel, inputType = "text", onChange, values }) {
  return (
    <div>
      <label htmlFor={id}>{inputLabel}</label>
      <input
        id={id}
        name={id}
        type={inputType}
        onChange={onChange}
        value={values[id]}
        className="input-group__input"
      />
    </div>
  );
}

export default InputGroup;

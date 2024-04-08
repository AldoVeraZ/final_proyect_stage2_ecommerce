import React from "react";
import Button from "./Button";

function Form({ children, onSubmit, labelButton }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="form__container"
    >
      {children}
      <Button
        type="submit"
        label={labelButton}
        className="form__button-submit"
      />
    </form>
  );
}

export default Form;

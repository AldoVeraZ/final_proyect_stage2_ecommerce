import React from "react";
import Button from "./Button";

import Icon from "./Icon";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Form({ children, onSubmit, labelButton, loading }) {
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
        label={
          loading ? (
            <>
              <Icon icon={faSpinner} />
              {" Enviando..."}{" "}
            </>
          ) : (
            labelButton
          )
        }
        className={"form__button-submit"}
        disabled={loading}
      />
    </form>
  );
}

export default Form;

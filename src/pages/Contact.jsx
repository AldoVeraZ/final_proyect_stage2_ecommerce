import React from "react";

import { postMessage } from "../util/api";
import FormLayout from "../layout/FormLayout";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: "",
};

function Contact() {
  const inputProps = {
    name: {
      inputLabel: "Nombre y apellido",
    },
    email: {
      inputLabel: "Correo electrónico",
      inputType: "email",
    },
    subject: {
      inputLabel: "Asunto",
    },
    body: {
      inputLabel: "Mensaje",
      inputType: "textarea",
    },
  };

  return (
    <FormLayout
      title="Envíanos un mensaje"
      inputProps={inputProps}
      onSubmit={postMessage}
      labelSubmit="Enviar mensaje"
      initialState={INITIAL_STATE}
    />
  );
}

export default Contact;

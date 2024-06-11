import React, { useState } from "react";
import { postMessage } from "../util/api";
import FormLayout from "../layout/FormLayout";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: "",
};

function Contact() {
  const [errors, setErrors] = useState({});
  const inputProps = {
    name: {
      inputLabel: "Nombre y apellido",
      error: errors.name,
    },
    email: {
      inputLabel: "Correo electrónico",
      inputType: "email",
      error: errors.email,
    },
    subject: {
      inputLabel: "Asunto",
      error: errors.subject,
    },
    body: {
      inputLabel: "Mensaje",
      inputType: "textarea",
      error: errors.body,
    },
  };

  const handleSubmit = async (values) => {
    const response = await postMessage(values);
    if (!response.ok) {
      setErrors(
        response.errors.reduce((acc, error) => {
          const key = Object.keys(error)[0];
          acc[key] = error[key];
          return acc;
        }, {})
      );
    } else {
      setErrors({});
      alert("Mensaje enviado con éxito");
    }
  };

  return (
    <div className="vertical-padding">
      <FormLayout
        className="contact"
        title="Envíanos un mensaje"
        inputProps={inputProps}
        onSubmit={handleSubmit}
        labelSubmit="Enviar mensaje"
        initialState={INITIAL_STATE}
      />
    </div>
  );
}

export default Contact;

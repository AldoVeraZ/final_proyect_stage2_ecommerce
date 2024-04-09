import React from "react";
import Text from "../components/Text";
import Form from "../components/Form";
import InputGroup from "../components/InputGroup";

import { useForm } from "../hooks/useForm";

function Contact() {
  const { values, handleInputChange } = useForm({});

  return (
    <div className="vertical-padding contact__container">
      <Text renderAs="h2" content="Envianos un mensaje"></Text>
      <Form
        onSubmit={() => console.log("submit contact")}
        labelButton={"Enviar mensaje"}
      >
        <InputGroup
          id="name"
          inputLabel="Nombre y apellido"
          onChange={handleInputChange}
          values={values}
        />
      </Form>
    </div>
  );
}

export default Contact;

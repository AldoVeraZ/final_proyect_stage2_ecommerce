import React from "react";
import Text from "../components/Text";
import Form from "../components/Form";

function Contact() {
  return (
    <div className="vertical-padding contact__container">
      <Text renderAs="h2" content="Envianos un mensaje"></Text>
      <Form
        onSubmit={() => console.log("submit contact")}
        labelButton={"Enviar mensaje"}
      >
        <input
          type="text"
          name="name"
          /*      value={values.name}
          onChange={handleInputChange} */
        />
      </Form>
    </div>
  );
}

export default Contact;

import React from "react";
import FormLayout from "../layout/FormLayout";

const INITIAL_STATE = {
  name: "",
  price: 0,
  stock: 0,
  brand: "",
  category: "",
  shortDesc: "",
  longDesc: "",
  delivery: "",
  ageFrom: 0,
  ageTo: 0,
  img: "",
};

function Upload() {
  const inputProps = {
    name: {
      inputLabel: "Nombre",
    },
    price: {
      inputLabel: "Precio",
      inputType: "number",
    },
    stock: {
      inputLabel: "Stock inicial",
      inputType: "number",
    },
    brand: {
      inputLabel: "Marca",
    },
    category: {
      inputLabel: "Categoria",
    },
    shortDesc: {
      inputLabel: "Categoria",
    },
    longDesc: {
      inputLabel: "Mensaje",
      inputType: "textarea",
    },
    delivery: {
      inputLabel: "Envio sin cargo",
      inputType: "checkbox",
    },
    ageFrom: {
      inputLabel: "Edad desde",
      inputType: "number",
    },
    ageTo: {
      inputLabel: "Edad hasta",
      inputType: "number",
    },
    img: {
      inputLabel: "Foto de la figura",
      inputType: "file",
    },
  };
  return (
    <FormLayout
      title="Upload a new figure"
      inputProps={inputProps}
      onSubmit={console.log}
      labelSubmit="Save new figure"
      initialState={INITIAL_STATE}
    />
  );
}

export default Upload;

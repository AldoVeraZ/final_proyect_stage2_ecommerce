import React from "react";
import FormLayout from "../layout/FormLayout";
import { postProducts } from "../util/api";
import {
  validatShort,
  validateLong,
  validatePrice,
  validateStock,
} from "../util/upload-validations";

const INITIAL_STATE = {
  name: "",
  price: "",
  stock: "",
  brand: "",
  category: "",
  shortDesc: "",
  longDesc: "",
  delivery: false,
  ageFrom: "",
  ageTo: "",
};

function Upload() {
  const inputProps = {
    name: {
      inputLabel: "Nombre",
    },
    price: {
      inputLabel: "Precio",
      inputType: "number",
      validation: validatePrice,
    },
    stock: {
      inputLabel: "Stock inicial",
      inputType: "number",
      validation: validateStock,
    },
    brand: {
      inputLabel: "Marca",
    },
    category: {
      inputLabel: "Categoría",
    },
    shortDesc: {
      inputLabel: "Descripción corta",
      validation: validatShort,
    },
    longDesc: {
      inputLabel: "Descripción larga",
      inputType: "textarea",
      validation: validateLong,
    },
    delivery: {
      inputLabel: "Envío sin cargo",
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
    image: {
      inputLabel: "SUBIR IMAGEN DE LA FIGURA",
      inputType: "file",
      accept: "image/*",
    },
  };

  /*   const handleSubmit = async (values) => {
    // Si el campo de la imagen está vacío, se asigna la URL por defecto
    const finalValues = {
      ...values,
      img: values.img || "https://i.imgur.com/hQjKrp4.png",
    };

    try {
      const data = await postProducts(finalValues);
      console.log("Producto cargado:", data);
      // Manejo post-envío exitoso, como restablecer el formulario
    } catch (error) {
      console.error("Error al cargar el producto:", error);
      // Manejo de errores
    }
  }; */

  return (
    <div className="vertical-padding">
      <FormLayout
        className="upload" // Clase específica para estilos de Upload
        title="Cargar nueva figura"
        inputProps={inputProps}
        onSubmit={postProducts} // Usamos handleSubmit aquí
        labelSubmit="Guardar nueva figura"
        initialState={INITIAL_STATE}
      />
    </div>
  );
}

export default Upload;

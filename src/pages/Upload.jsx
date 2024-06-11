import React, { useState } from "react";
import FormLayout from "../layout/FormLayout"; // Asegúrate de que la ruta es correcta.
import { postProducts } from "../util/api"; // Asegúrate de que la función está importada correctamente.
import {
  validatShort,
  validateLong,
  validatePrice,
  validateStock,
} from "../util/upload-validations"; // Importa las validaciones correctamente.

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
  image: null,
};

function Upload() {
  const [errors, setErrors] = useState({}); // Estado para manejar los errores de validación

  const inputProps = {
    name: {
      inputLabel: "Nombre",
      error: errors.name,
    },
    price: {
      inputLabel: "Precio",
      inputType: "number",
      validation: validatePrice,
      error: errors.price,
    },
    stock: {
      inputLabel: "Stock inicial",
      inputType: "number",
      validation: validateStock,
      error: errors.stock,
    },
    brand: {
      inputLabel: "Marca",
    },
    category: {
      inputLabel: "Categoría",
      error: errors.category,
    },
    shortDesc: {
      inputLabel: "Descripción corta",
      validation: validatShort,
      error: errors.shortDesc,
    },
    longDesc: {
      inputLabel: "Descripción larga",
      inputType: "textarea",
      validation: validateLong,
      error: errors.longDesc,
    },
    delivery: {
      inputLabel: "Envío sin cargo",
      inputType: "checkbox",
      error: errors.delivery,
    },
    ageFrom: {
      inputLabel: "Edad desde",
      inputType: "number",
      error: errors.ageFrom,
    },
    ageTo: {
      inputLabel: "Edad hasta",
      inputType: "number",
      error: errors.ageTo,
    },
    image: {
      inputLabel: "SUBIR IMAGEN DE LA FIGURA",
      inputType: "file",
      accept: "image/*",
      error: errors.image,
    },
  };

  const handleSubmit = async (values) => {
    try {
      const data = await postProducts(values);
      console.log("Producto cargado:", data);
      setErrors({});
    } catch (error) {
      console.error("Error al cargar el producto:", error);
      if (error.response && error.response.data && error.response.data.errors) {
        const errorObj = {};
        error.response.data.errors.forEach((err) => {
          const key = Object.keys(err)[0];
          errorObj[key] = err[key];
        });
        setErrors(errorObj); // Actualiza el estado de errores con los errores de la respuesta.
      }
    }
  };

  return (
    <div className="vertical-padding">
      <FormLayout
        className="upload"
        title="Cargar nueva figura"
        inputProps={inputProps}
        onSubmit={handleSubmit}
        labelSubmit="Guardar nueva figura"
        initialState={INITIAL_STATE}
        errors={errors} // Pasa los errores a FormLayout
      />
    </div>
  );
}

export default Upload;

import axios from "axios"; // Importamos axios para hacer solicitudes HTTP.

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API, // Configuramos la base URL para axios usando una variable de entorno.
});

export const getProducts = async (searchQuery = "") => {
  const resp = await axiosInstance.get(`/products?search=${searchQuery}`); // Hacemos una solicitud GET a la API con el término de búsqueda.
  return resp.data; // Devolvemos los datos de la respuesta.
};

export const postMessage = async (body) => {
  try {
    const resp = await axiosInstance.post("/messages", body);
    return resp.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return {
        ok: false,
        errors: error.response.data.errors,
      };
    }
    throw error;
  }
};

export const postProducts = async (body) => {
  try {
    const formData = new FormData();
    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value); // Añadimos cada campo del cuerpo a FormData.
    });
    const resp = await axiosInstance.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Configuramos el encabezado para multipart/form-data.
      },
    });
    return resp.data; // Devolvemos los datos de la respuesta.
  } catch (error) {
    if (error.response && error.response.data) {
      return {
        ok: false,
        errors: error.response.data.errors,
      };
    }
    throw error;
  }
};

export const postCart = async (body) => {
  const resp = await axiosInstance.post("/cart", { items: body }); // Hacemos una solicitud POST para crear un carrito.
  return resp.data; // Devolvemos los datos de la respuesta.
};

export const editCart = async (id, body) => {
  const resp = await axiosInstance.put(`/cart/edit/${id}`, { items: body }); // Hacemos una solicitud PUT para editar un carrito.
  return resp.data; // Devolvemos los datos de la respuesta.
};

export const getCart = async (id) => {
  const resp = await axiosInstance.get(`/cart/get/${id}`); // Hacemos una solicitud GET para obtener un carrito por ID.
  return resp.data; // Devolvemos los datos de la respuesta.
};

export const postPreferenceMP = async (body) => {
  const resp = await axiosInstance.post(`checkout`, body); // Hacemos una solicitud POST para crear una preferencia de pago.
  return resp.data; // Devolvemos los datos de la respuesta.
};

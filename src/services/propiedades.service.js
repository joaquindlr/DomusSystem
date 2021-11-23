import axios from "axios";

export async function getAllPropiedades() {
  try {
    const result = await axios.get("http://localhost:8080/propiedad");
    return result.data;
  } catch (error) {
    console.warn(error);
  }
}

export async function registrarPropiedad(nuevaPropiedad) {
  const propiedad = {
    ...nuevaPropiedad,
    espacios: parseInt(nuevaPropiedad.espacios),
    antiguedad: parseFloat(nuevaPropiedad.antiguedad),
    precio: parseFloat(nuevaPropiedad.precio),
  };
  try {
    const result = await axios.post(
      "http://localhost:8080/propiedad",
      propiedad
    );
    return result.data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getPropiedadById(id) {
  try {
    const result = await axios.get(`http://localhost:8080/propiedad/${id}`);
    return result.data;
  } catch (error) {
    console.warn(error);
  }
}

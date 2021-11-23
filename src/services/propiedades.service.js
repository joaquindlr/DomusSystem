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
  try {
    const result = await axios.post(
      "http://localhost:8080/propiedad",
      nuevaPropiedad
    );
    return result.data;
  } catch (error) {
    console.warn(error);
  }
}

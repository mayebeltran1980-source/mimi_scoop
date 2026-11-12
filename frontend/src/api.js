
const API_URL = "http://localhost:5000/api/cucharitas";

export async function obtenerCucharitas() {
  const respuesta = await fetch(API_URL);
  if (!respuesta.ok) {
    throw new Error("No se pudo conectar con la API");
  }
  return await respuesta.json();
}
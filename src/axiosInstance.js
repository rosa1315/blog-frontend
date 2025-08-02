import axios from "axios";
// Detecta si estás en local o en producción
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://blog-backend-0v7w.onrender.com/api"; // Reemplaza con tu URL de Render

const axiosInstance = axios.create({
  baseURL,
});
export default axiosInstance;
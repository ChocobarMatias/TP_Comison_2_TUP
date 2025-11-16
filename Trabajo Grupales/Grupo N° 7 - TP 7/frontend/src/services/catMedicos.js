import axios from "axios";

export const getCatMedicos = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/catMedicos");
    return res.data;        // 👈 ahora sí devuelve solo el array
  } catch (error) {
    console.log(error);
    return [];              // 👈 evita que CatMedicos explote
  }
};


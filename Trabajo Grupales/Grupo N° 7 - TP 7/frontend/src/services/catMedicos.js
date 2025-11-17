import axios from "axios";

export const getCatMedicos = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/catMedicos");
    return res.data;     
  } catch (error) {
    console.log(error);
    return [];              
  }
};


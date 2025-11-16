import axios from "axios"


export const getCatMedicos=async (params) => {
    try {
   const data = await axios.get('http://localhost:3000/api/catMedicos');
    return data
    } catch (error) {
     console.log(error);
        
    }
}
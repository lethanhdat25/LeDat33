import axios from "axios";

const url = "https://localhost:44349/api/Provinces/";
export const provincesApi = {
  getData: async () => {
    return await axios.get(url);
  },
  getProvinceById: async (id)=>{
    return await  axios.get(url+id);
  },
};

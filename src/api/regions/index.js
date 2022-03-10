import axios from "axios";

const url = "https://localhost:44349/api/Regions";
export const regionApi = {
  getData: async () => {
    return await axios.get(url);
  },
};

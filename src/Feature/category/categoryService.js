import axios from "axios";
import { base_url } from "../../untils/axiosConfig";

const getCategory = async () => {
      const response = await axios.get(`${base_url}category`);
        return response.data;
  };


  
  export const categoryService = {
    getCategory
  };
  
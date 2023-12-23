import axios from "axios";
import { base_url, config } from "../../untils/axiosConfig";

const getOneLesson = async (id) => {
    const response = await axios.get(`${base_url}lesson/${id}`,config);
      return response.data;
  };
  

  export const lessonService = {
    getOneLesson
  };
  
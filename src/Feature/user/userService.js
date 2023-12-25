import axios from "axios";
import { base_url, config } from "../../untils/axiosConfig";

const register = async (userData) => {
      const response = await axios.post(`${base_url}user/register`, userData);

        return response.data;
  };

  const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData);
    if(response.data){
      localStorage.setItem("customer",JSON.stringify(response.data))
    }
      return response.data;
 
};

const getOneUser = async (data) => {
  const response = await axios.get(`${base_url}user/get-user`, data);

    return response.data;

};


const getUserCourse = async () => {
  const response = await axios.get(`${base_url}user/course-list`, config);
  return response.data;

};


  
  export const authService = {
    register,
    login,
    getUserCourse,
    getOneUser
  };
  
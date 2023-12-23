import axios from "axios";
import { base_url, config } from "../../untils/axiosConfig";

const getCourse = async () => {
      const response = await axios.get(`${base_url}course`);
        return response.data;
  };

const enrollCourse = async (courseId) => {
    const response = await axios.post(`${base_url}course/enrollcourse`,{courseId},config);
      return response.data;
};

const getOneCourse = async (id) => {
  const response = await axios.get(`${base_url}course/${id}`);
    return response.data;
};

const getAllLesson = async (id) => {
  const response = await axios.get(`${base_url}course/${id}/lesson`);
    return response.data;
};

const rateCourse = async (data) => {
  const response = await axios.put(`${base_url}course/rating`,data,config);
    return response.data;
};

  
  export const courseService = {
    getCourse,
    enrollCourse,
    getOneCourse,
    getAllLesson,
    rateCourse
  };
  
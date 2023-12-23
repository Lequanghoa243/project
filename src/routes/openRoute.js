import { replace } from "formik";
import { Navigate } from "react-router-dom";

export const OpenRoute=({children}) => {
    const getTokenFromLocalStorage=localStorage.getItem("token")
    return getTokenFromLocalStorage !== undefined ? children: (<Navigate to = '/' replace = {true}/>)
}
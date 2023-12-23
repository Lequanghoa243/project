import { replace } from "formik";
import { Navigate } from "react-router-dom";

export const PrivateRoute=({children}) => {
    const getTokenFromLocalStorage=localStorage.getItem("token")
    return getTokenFromLocalStorage !== null ? children: (<Navigate to = '/login' replace = {true}/>)
}
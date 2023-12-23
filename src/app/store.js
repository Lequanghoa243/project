import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Feature/user/userSlice'
import courseReducer from '../Feature/course/courseSlice'
import categoryReducer from '../Feature/category/categorySlice'
import lessonReducer from '../Feature/lesson/lessonSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer,
        course:courseReducer,
        category:categoryReducer,
        lesson:lessonReducer
    }

});
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { courseService } from "./courseService";
import { toast } from "react-toastify";


export const getCourse = createAsyncThunk("course",async(thunkAPI) => {
    try{
        return await courseService.getCourse();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

export const enrollCourse = createAsyncThunk("course/enrollcourse",async(courseId,thunkAPI) => {
    try{
        return await courseService.enrollCourse(courseId);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})
export const getOneCourse  = createAsyncThunk(
    "course/get-one",
    async (id,thunkAPI) => {
      try {
        return await courseService.getOneCourse(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const addRating = createAsyncThunk("course/rating",async(data,thunkAPI) => {
    try{
        return await courseService.rateCourse(data);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

  export const getAllLesson  = createAsyncThunk(
    "course/get-all-lesson",
    async (id,thunkAPI) => {
      try {
        return await courseService.getAllLesson(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


const courseState={
    course:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const courseSlice = createSlice({
    name:"course",
    initialState:courseState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCourse.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getCourse.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError = false;
            state.isSuccess=true;
            state.course = action.payload;
           
        }).addCase(getCourse.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError === true) toast.error(state.message.message);
        }).addCase(enrollCourse.pending,(state)=>{
            state.isLoading=true;
        }).addCase(enrollCourse.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError = false;
            state.isSuccess=true;
            state.enrollCourse = action.payload;
           
        }).addCase(enrollCourse.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError === true) toast.error(state.message.message);
        })
        .addCase(getOneCourse.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getOneCourse.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.course = action.payload;
          })
          .addCase(getOneCourse.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
          .addCase(getAllLesson.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getAllLesson.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.lesson = action.payload;
          })
          .addCase(getAllLesson.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
          .addCase(addRating.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(addRating.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.rating= action.payload;
            if(state.isSuccess) toast.success("Rating Added Successfully")
          })
          .addCase(addRating.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })

    }
})

export default courseSlice.reducer;
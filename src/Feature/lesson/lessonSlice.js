import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { lessonService } from "./lessonService";
import { toast } from "react-toastify";


export const getOneLesson  = createAsyncThunk(
    "lesson/get-one",
    async (id,thunkAPI) => {
      try {
        return await lessonService.getOneLesson(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );



const lessonState={
    lesson:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const lessonSlice = createSlice({
    name:"lesson",
    initialState:lessonState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getOneLesson.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getOneLesson.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.lesson = action.payload;
          })
          .addCase(getOneLesson.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
    }
})

export default lessonSlice.reducer;
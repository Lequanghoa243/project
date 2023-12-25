import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";


export const registerUser = createAsyncThunk("/user/register",async(userData,thunkAPI) => {
    try{
        return await authService.register(userData)
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

export const loginUser = createAsyncThunk("/user/login",async(userData,thunkAPI) => {
    try{
        return await authService.login(userData)
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

export const getUserCourse = createAsyncThunk("/user/get-courselist",async(thunkAPI) => {
    try{
        return await authService.getUserCourse()
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

export const getOneUser = createAsyncThunk("/user/get-user",async(data,thunkAPI) => {
    try{
        return await authService.getOneUser(data)
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;




   
const initialState={
    customer:getCustomerfromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError = false;
            state.isSuccess=true;
            state.createdUser = action.payload;  
        }).addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError === true) toast.error(state.message.message);
        })
        .addCase(getUserCourse.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getUserCourse.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError = false;
            state.isSuccess=true;
            state.createdUser = action.payload;
        }).addCase(getUserCourse.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSuccess=false;
            state.message=action.error;
        })
        .addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError = false;
            state.isSuccess=true;
            state.user = action.payload;
            if(state.isSuccess === true) 
            {toast.info("User Loged In Successfully");
            localStorage.setItem("token",action.payload.token);}
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError === true) toast.error(state.message.message);
        }).addCase(getOneUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getOneUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError = false;
            state.isSuccess=true;
            state.getauser = action.payload;
        }).addCase(getOneUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSuccess=false;
            state.message=action.error;
        })
    }
})

export default authSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService } from "./categoryService";
import { toast } from "react-toastify";


export const getCategory = createAsyncThunk("category",async(thunkAPI) => {
    try{
        return await categoryService.getCategory();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})


const categoryState={
    category:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const categorySlice = createSlice({
    name:"category",
    initialState:categoryState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCategory.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getCategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError = false;
            state.isSuccess=true;
            state.category = action.payload;
           
        }).addCase(getCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError === true) toast.error(state.message.message);
        })

    }
})

export default categorySlice.reducer;
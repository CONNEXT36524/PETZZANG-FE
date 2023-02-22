import { createSlice } from "@reduxjs/toolkit";

const initialState={
    ImgUrl :"null"
}

export const ImgSlice = createSlice({
    name: 'ImgConvert',
    initialState,
    reducers:{
        converter:(state, action)=>{
            state.ImgUrl=action.payload
        }
    }
});

export const { converter } = ImgSlice.actions;
export default ImgSlice.reducer;
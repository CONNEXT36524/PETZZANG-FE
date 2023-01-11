import { createSlice } from "@reduxjs/toolkit";

const initialState={
    pagetype:"home"
}

export const Navslice = createSlice({
    name: 'nav',
    initialState,
    reducers:{
        changepagetype:(state, action)=>{
            state.pagetype=action.payload
        }
    }
});

export const { changepagetype} = Navslice.actions;
export default Navslice.reducer;
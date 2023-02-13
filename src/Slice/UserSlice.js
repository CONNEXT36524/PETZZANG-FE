import { createSlice } from "@reduxjs/toolkit";

const initialState={
    nickName : " ",
    profileImg : " ",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        me:(state, action)=>{
            state.pagetype=action.payload
        }
    }
});

export const { userInfo } = userSlice.actions;
export default userSlice.reducer;
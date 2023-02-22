import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firstimg:''

}

export const RankingSlice = createSlice({
    name: 'ranking',
    initialState,
    reducers:{
        //이주의 반려동물
        setfirstranking:(state, action)=>{
            state.firstimg = action.payload
            console.log(state.firstimg)
        },
        
    }
});

export const { setfirstranking } = RankingSlice.actions;
export default RankingSlice.reducer;
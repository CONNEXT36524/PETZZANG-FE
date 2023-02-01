import { createSlice } from "@reduxjs/toolkit";

const initialState={
    page : 1,
    cntPerPage : 8,
    total : 30,
    range : 5,

}

export const PagingSlice = createSlice({
    name: 'page',
    initialState,
    reducers:{
        //현재 페이지 설정
        setCurPage:(state, action)=>{
            state.page = action.payload
        },
        //한페이지에 들어갈 게시글 수, 전체 게시글 수, 범위
        rpaging:(state, action) => {
           state.cntPerPage = action.payload.cntPerPage
           state.total = action.payload.total
           state.range  = action.payload.range
        }
    }
});

export const { setCurPage, rpaging } = PagingSlice.actions;
export default PagingSlice.reducer;
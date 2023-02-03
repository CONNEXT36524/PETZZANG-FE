import { createSlice } from "@reduxjs/toolkit";


export const SearchSlice = createSlice({
    name: "Search",
    initialState: {
        boardTypeArr: []
    },
    reducers: {
        addBoardType: (state, action) => {
            //console.log(action.payload)
            // if(state.boardTypeArr.includes(action.payload)===false) {
            state.boardTypeArr = [...state.boardTypeArr, action.payload]
            //}
            //console.log(...state.boardTypeArr)
        }

    }
});


export const {addBoardType} = SearchSlice.actions;
export default SearchSlice.reducer;
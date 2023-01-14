import { createSlice } from "@reduxjs/toolkit";


export const OffcanvasSlice = createSlice({
    name: "Offcanvas",
    initialState: {
        animalTypeArr: [],
        sexTypeArr: []
    },
    reducers: {
        //종
        Checked_Animal: (state, action) => {
            //console.log(action.payload)
            state.animalTypeArr = [...state.animalTypeArr, action.payload]
            //console.log(...state.animalTypeArr)
        },
        Unchecked_Animal: (state, action) => {
            //console.log(action.payload)
            state.animalTypeArr = state.animalTypeArr.filter(ele => ele !== action.payload)
            //console.log(...state.animalTypeArr)
        },
        Checked_All_Animal: (state, action) => {
            state.animalTypeArr = action.payload
        },
        Unchecked_All_Animal: (state, action) => {
            //console.log(action.payload)
            state.animalTypeArr = action.payload
            console.log(...state.animalTypeArr)
        },


        // 성별 
        Checked_Sex: (state, action) => {
            state.sexTypeArr = [...state.sexTypeArr, action.payload]
        },
        Unchecked_Sex: (state, action) => {
            state.sexTypeArr = state.sexTypeArr.filter(ele => ele !== action.payload)
        },
        Checked_All_Sex: (state, action) => {
            state.sexTypeArr = action.payload
        },
        Unchecked_All_Sex: (state, action) => {
            state.sexTypeArr = action.payload
            //console.log(...state.sexTypeArr)
        },
    }
});


export const { Checked_Animal, Unchecked_Animal, Checked_All_Animal, Unchecked_All_Animal,
Checked_Sex, Unchecked_Sex, Checked_All_Sex, Unchecked_All_Sex } = OffcanvasSlice.actions;
export default OffcanvasSlice.reducer;

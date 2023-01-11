import { configureStore} from "@reduxjs/toolkit";
import NavReducer from "../Slice/Navslice"


export const Store = configureStore({
    reducer:{
        Nav:NavReducer
    }
});


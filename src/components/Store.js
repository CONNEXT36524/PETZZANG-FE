import { configureStore} from "@reduxjs/toolkit";
import NavReducer from "../Slice/Navslice"
import OffcanvasReducer from "../Slice/OffcanvasSlice"


export const Store = configureStore({
    reducer:{
        Nav: NavReducer,
        Offcanvas: OffcanvasReducer,
    }
});


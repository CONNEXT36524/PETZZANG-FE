import { configureStore} from "@reduxjs/toolkit";
import NavReducer from "../Slice/Navslice"
import OffcanvasReducer from "../Slice/OffcanvasSlice"
import PagingReducer from "../Slice/PagingSlice"
import RankingReducer from "../Slice/RankingSlice"

export const Store = configureStore({
    reducer:{
        Nav: NavReducer,
        Offcanvas: OffcanvasReducer,
        PagingR: PagingReducer,
        Rank: RankingReducer
    }
});



import "./Ranking.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";

const Ranking=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("ranking"))
    },[dispatch])
    
    return(
        <>
            <div className="ranking_first_section">
                hi
            </div>
        </>
    );
}


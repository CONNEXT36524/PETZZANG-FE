import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Daily.css";

{/* 게시글 없을때 띄울 화면 */}
function NoContent() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("community"))
    },[dispatch])

    return (
        <>
		<div>
			<div className="noContentMain">
                <br/><hr/>
                <div className="noContent">
                    <h3>게시판에 글이 없습니다.</h3>
                    <button
						className="writeBtn"
						onClick={() =>
						(window.location.href = "/community/posting")
						}>
						{" "} ✏️ 글쓰기 {" "}
					</button>
                </div>
                <hr/><br/>
            </div>

            <br/><br/>
        </div>
        </>
    );
}

export default NoContent;
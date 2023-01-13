import React, {useEffect } from "react";
import { useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import "bootstrap/dist/css/bootstrap.min.css";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import Container from "react-bootstrap/Container";
import "./Daily.css";

function Boast(props) {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("community"))
    },[dispatch])

    return (
        <>
        <CommunityBanner />
		<Container>
            <br/><br/><br/><br/>
			<h2 className="boardName">자랑 게시판</h2>


            {/* 게시글 없을때 띄울 화면 */}
			<div className="boastMain">
                <br/><hr/>
                <div className="noContent">
                    <h3>게시판에 글이 없습니다.</h3>
                    <button
						className="writeBtn"
						onClick={() =>
						(window.location.href = "/community/posting")
						}>
						{" "} ✏️ 글쓰기{" "}
					</button>
                </div>
                <hr/><br/>
            </div>

            <br/><br/>
        </Container>
        </>
    );
}

export default Boast;
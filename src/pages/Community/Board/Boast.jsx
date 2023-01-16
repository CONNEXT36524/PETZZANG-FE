import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import "bootstrap/dist/css/bootstrap.min.css";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Container from "react-bootstrap/Container";
import NoContent from "./NoContent";
import "./Daily.css";

function Boast() {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("community"))
    },[dispatch])

    //MNB 정보
	const content = "HOME>커뮤니티>자랑";

    return (
        <>
        <CommunityBanner />
        <MiddleNav contents={content} />
		<Container>
            <br/><br/><br/><br/>
			<h2 className="boardName">자랑 게시판</h2>

            <NoContent/>

            <br/><br/>
        </Container>
        </>
    );
}

export default Boast;
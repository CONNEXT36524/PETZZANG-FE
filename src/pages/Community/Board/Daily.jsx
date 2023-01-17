import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import "bootstrap/dist/css/bootstrap.min.css";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Container from "react-bootstrap/Container";
import "./Daily.css";
import Offcanvas from "../../../components/community/OffCanvas.js";
import ImgCard from "../../../components/community/ImgCard.js";
import TypeBtn from "../../../components/community/TypeBtn.js";
import Paging from "../../../components/community/Paging.js";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import WriteButton from "../../../components/button/WriteButton";
import { rpaging } from "../../../Slice/PagingSlice";

function Daily() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changepagetype("community"));
		dispatch(rpaging(setPage));
	}, [dispatch]);

	const [typeValue, setTypeValue] = useState(""); //OffCanvas에서 Daily로 데이터가져오기

	// console.log(typeValue);

	const data = [
		{img: "../../img/dog1.png", content: "내용1"}, 
		{img: "../../img/dog2.png", content: "내용2"}, 
	]

	const currentPage = useSelector(state => state.PagingR.page);
    const cntPerPage = useSelector(state => state.PagingR.cntPerPage);
    const total = useSelector(state => state.PagingR.total);
    const range = useSelector(state => state.PagingR.range);

    const setPage = {
        cntPerPage : 10, 
        total : 40, 
        range : 5 
    }

	// 백엔드에서 게시글 list 받아와서 questionData 대신 sliceList를 map에 사용
	//  
	// const sliceList = () =>{ 
    //         setPage.total = list.length
    //         dispatch(rpaging(setPage))
    //         return list.slice(cntPerPage*(currentPage-1), cntPerPage*currentPage);
    // } 
	
	return ( 
		<>
			<CommunityBanner />
			<MiddleNav contents="HOME>커뮤니티>일상" />
			<Container>
				<div className="dailyMain">
					<br />
					<br />
					<br />
					<br />
					<h2 className="boardName">일상 게시판</h2> <br />
					<Offcanvas setTypeValue={setTypeValue} />
					<TypeBtn data={typeValue} />

					<ImgCard />
					<br />
					<br />
					<div className="writeBtnDiv">
						<Paging />
						<WriteButton content="HOME>커뮤니티>일상>게시글 작성" />

					</div>
				</div>
			</Container>
		</>
	);
}

export default Daily;

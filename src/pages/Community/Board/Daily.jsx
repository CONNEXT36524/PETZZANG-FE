import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import "bootstrap/dist/css/bootstrap.min.css";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Container from "react-bootstrap/Container";
import "./Daily.css";
import Offcanvas from "../../../components/community/OffCanvas.js";
import Imgdiv from "../../../components/community/Imgdiv.js";
import TypeBtn from "../../../components/community/TypeBtn.js";
import Paging from "../../../components/community/Paging.js";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import WriteButton from "../../../components/button/WriteButton";

function CallImgCard(props) {
	//console.log(props)
	var arr = [];

	for(let divNum=0; divNum<props.propsData.length; divNum=divNum+4) {
		// console.log(props.propsData.slice(divNum,(divNum+4)))
		arr.push (
			<div className='ImgCardDiv' key={divNum}> 
				<Imgdiv data={props.propsData.slice(divNum,(divNum+4))}/> 
			</div>
		)
	}
	return arr;
}



function Daily() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changepagetype("community"));
	}, [dispatch]);

	const [typeValue, setTypeValue] = useState(""); //OffCanvas에서 Daily로 데이터가져오기

	// console.log(typeValue);

	const data = [
		{id:0, img: '../../img/dog1.png', content: '내용1'},
		{id:1, img: '../../img/dog2.png', content: '내용2'},
		{id:2, img: '../../img/dog1.png', content: '내용3'},
		{id:3, img: '../../img/dog2.png', content: '내용4'},
		{id:4, img: '../../img/dog1.png', content: '내용5'},
		{id:5, img: '../../img/dog2.png', content: '내용6'},
	]

	return ( 
		<>
			<CommunityBanner />
			<MiddleNav contents="HOME>커뮤니티>일상" />
			<Container>
				<div className="dailyMain">
					
					<h2 className="boardName"> 일상 게시판</h2> <br/>
					
					<Offcanvas setTypeValue={setTypeValue} />
					<TypeBtn data={typeValue} />
					<CallImgCard propsData={data}/>
					<br/> <br/>

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

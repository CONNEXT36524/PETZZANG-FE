import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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

function Daily() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changepagetype("community"));
	}, [dispatch]);

	const [typeValue, setTypeValue] = useState(""); //OffCanvas에서 Daily로 데이터가져오기

	console.log(typeValue);

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
					{/* <Stack spacing={2}>
          <Pagination count={10} />
        </Stack> */}
					<div className="writeBtnDiv">
						<Paging />
						<button
							className="writeBtn"
							onClick={() =>
								(window.location.href = "/community/posting")
							}
						>
							{" "}
							✏️ 글쓰기{" "}
						</button>
					</div>
				</div>
			</Container>
		</>
	);
}

export default Daily;

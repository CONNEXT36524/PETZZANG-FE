import React from "react";
import "./PostingSelection.css";
import Form from "react-bootstrap/Form";

function SelectBoard() {
	//props로 게시판 정보 받아와서 active로 만들기

	return (
		<div className="selectPostingType">
			<Form.Select
				className="selectBoardType"
				aria-label="Default select example"
				as="1"
			>
				<option>게시판 유형</option>
				<option value="1"> 🖼 일상 게시판 </option>
				<option value="2"> 👏 자랑 게시판 </option>
				<option value="3"> 🙋 질문 게시판 </option>
				<option value="4"> 🎁 제품 추천 게시판 </option>
			</Form.Select>
		</div>
	);
}
export default SelectBoard;

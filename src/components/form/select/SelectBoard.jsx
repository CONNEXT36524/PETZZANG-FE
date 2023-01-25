import { React, useState } from "react";
import "./PostingSelection.css";
import "../../../pages/Community/Posting/Posting.css";
import Form from "react-bootstrap/Form";

function SelectBoard(props) {
	const [boardType, setBoardType] = useState("");

	const onChange = (e) => {
		setBoardType(e.target.value);
	};

	props.getBoardType(boardType);
	return (
		<div className="selectPostingType">
			<Form.Select
				name="boardType"
				className="selectBoardType"
				aria-label="Board Type Selection"
				as="1"
				onChange={onChange}
				value={boardType}
				required
			>
				<option value="none">게시판 유형</option>
				<option value="daily"> 🖼 일상 게시판 </option>
				<option value="boast"> 👏 자랑 게시판 </option>
				<option value="question"> 🙋 질문 게시판 </option>
				<option value="recommendation"> 🎁 제품 추천 게시판 </option>
			</Form.Select>
		</div>
	);
}
export default SelectBoard;

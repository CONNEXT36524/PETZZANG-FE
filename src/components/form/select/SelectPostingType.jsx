import React from "react";
import "./PostingSelection.css";
import Form from "react-bootstrap/Form";

function SelectPostingType() {
	return (
		<div className="selectPostingType">
			<Form.Select
				id="selection1"
				className="selection"
				aria-label="Default select example"
			>
				<option>동물</option>
				<option value="1">강아지</option>
				<option value="2">고양이</option>
				<option value="3">관상어</option>
				<option value="4">햄스터</option>
				<option value="5">토끼</option>
				<option value="6">새</option>
				<option value="7">거북이</option>
				<option value="8">기타</option>
			</Form.Select>

			<Form.Select
				disabled="true"
				id="selection2"
				className="selection"
				aria-label="Default select example"
			>
				<option>품종</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</Form.Select>

			<Form.Select
				id="selection3"
				className="selection"
				aria-label="Default select example"
			>
				<option>성별</option>
				<option value="1">암컷</option>
				<option value="2">수컷</option>
			</Form.Select>
		</div>
	);
}

export default SelectPostingType;

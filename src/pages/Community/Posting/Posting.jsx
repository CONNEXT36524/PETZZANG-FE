import { useState } from "react";
import React from "react";
import "./Posting.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Form from "react-bootstrap/Form";
import Editor from "../../../components/editor/EditorComponent";
import PostingBanner from "../../../components/banner/PostingBanner";
import SavePostingModal from "../../../components/modal/SavePostingModal";

function Posting(props) {
	//Editor
	const [desc, setDesc] = useState("");
	function onEditorChange(value) {
		setDesc(value);
	}

	//Modal
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div className="posting">
			<PostingBanner />

			<MiddleNav />
			<Container>
				<br />
				<br />
				<br />
				<br />
				<br />

				<div className="containerHeader">
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
					>
						<Form.Label>제목</Form.Label>
						<Form.Control
							size="lg"
							type="email"
							placeholder="제목을 입력하세요"
						/>
					</Form.Group>
					<br />
					<hr size="5" />
					<br />
					<Form.Group controlId="formFileLg" className="mb-3">
						<Form.Label>썸네일 사진 첨부</Form.Label>
						<Form.Control type="file" />
					</Form.Group>
					<br />
					<hr size="5" />
					<br />
					<div className="selectType">
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
					<br />
					<hr size="5" />
				</div>
				<br />
				<div>
					<Editor
						id="textEditor"
						value={desc}
						onChange={onEditorChange}
					/>
				</div>
				<hr size="5" />
				<div className="containerFooter">
					<Button
						className="postingBtn"
						variant="primary"
						onClick={() => setModalShow(true)}
					>
						✏️ 작성하기
					</Button>

					<SavePostingModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</div>
			</Container>
		</div>
	);
}

export default Posting;

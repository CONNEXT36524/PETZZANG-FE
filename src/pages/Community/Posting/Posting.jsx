import React, { useState } from "react";
import "./Posting.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Form from "react-bootstrap/Form";
import Editor from "../../../components/editor/QuillEditor";
import PostingBanner from "../../../components/banner/PostingBanner";
import SavePostingModal from "../../../components/modal/SavePostingModal";
import SelectBoard from "../../../components/form/select/SelectBoard";
import SelectPostingType from "../../../components/form/select/SelectPostingType";
function Posting(props) {
	//Editor
	const [desc, setDesc] = useState("");
	function onEditorChange(value) {
		setDesc(value);
	}

	function setContentsShow() {
		console.log(desc);
	}
	//Modal
	const [modalShow, setModalShow] = React.useState(false);

	//MNB 정보
	//const location = useLocation();
	const content = "HOME>커뮤니티>게시글 작성";

	return (
		<div>
			<PostingBanner />

			<MiddleNav contents={content} />

			<Container className="posting">
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
					<hr size="30" />
					<Form.Group controlId="formFileLg" className="mb-3">
						<Form.Label>썸네일 사진 첨부</Form.Label>
						<Form.Control type="file" />
					</Form.Group>
					<br />
					<hr size="50" />
					<SelectBoard />
					<SelectPostingType />
					<br />
					<hr size="50" />
				</div>
				<br />
				<div>
					<Button variant="warning" onClick={() => setContentsShow()}>
						check contents
					</Button>

					<Editor
						id="textEditor"
						value={desc}
						onChange={onEditorChange}
					/>
				</div>
				<br />
				<hr size="50" />
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

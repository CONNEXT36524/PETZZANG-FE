import React, { useState } from "react";
import "./Posting.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Editor from "../../../components/editor/QuillEditor";
import PostingBanner from "../../../components/banner/PostingBanner";
import SavePostingModal from "../../../components/modal/SavePostingModal";
import TitleInput from "../../../components/form/control/TitleInput";
import FileInput from "../../../components/form/control/FileInput";
import SelectBoard from "../../../components/form/select/SelectBoard";
import SelectPostingType from "../../../components/form/select/SelectPostingType";

function Posting(props) {
	const getTitle = (x) => {
		console.log(x);
	};

	const getBoardType = (x) => {
		console.log(x);
	};

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
					<div></div>
					<TitleInput getTitle={getTitle} />
					<br />
					<FileInput />
					<br />
					<SelectBoard getBoardType={getBoardType} />
					<SelectPostingType />
					<br />
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

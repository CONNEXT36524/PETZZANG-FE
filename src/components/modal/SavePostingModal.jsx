import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function SavePostingModal(props) {
	const navigate = useNavigate();
	function backToBoard(boardType) {
		if (boardType === "") {
			navigate("/community/daily");
		} else {
			navigate("/community/" + boardType);
		}
	}

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>{props.uploadedstate}</h4>
			</Modal.Body>
			<Modal.Footer>
				{props.uploadedstate === "업로드를 하시겠습니까?" ? (
					<>
						<Button onClick={props.onHide} variant="dark">
							취소
						</Button>
						<Button onClick={props.handleupload} variant="primary">
							확인
						</Button>
					</>
				) : (
					<>
						<Button
							onClick={() => backToBoard(props.boardtype)}
							variant="primary"
						>
							게시판으로 돌아가기
						</Button>
					</>
				)}
			</Modal.Footer>
		</Modal>
	);
}

export default SavePostingModal;

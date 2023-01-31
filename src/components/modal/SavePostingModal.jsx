import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SavePostingModal(props) {
	const [uploadedState, setUploadedState] = useState(props.uploadedState);

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
				<h4>{uploadedState}</h4>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide} variant="warning">
					취소
				</Button>
				<Button onClick={props.onUpload} variant="primary">
					확인
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default SavePostingModal;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SavePostingModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					업로드 확인
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>업로드하시겠습니까?</h4>
				<p>해당 글은 일상 게시판에 업로드됩니다.</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>취소</Button>
				<Button onClick={props.onUpload} variant="primary">
					확인
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default SavePostingModal;

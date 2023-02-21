import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteReplyModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					댓글 삭제하기
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>삭제되었습니다.</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>닫기</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default DeleteReplyModal;

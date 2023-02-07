import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteAccount(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					회원탈퇴
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>탈퇴하시겠습니까?</h4>
				<p>회원님에 대한 모든 정보가 삭제 됩니다.</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>취소</Button>
				<Button variant="primary">확인</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default DeleteAccount;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CheckNicknameModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					닉네임 변경
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>{props.msg}</h4>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>확인</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CheckNicknameModal;

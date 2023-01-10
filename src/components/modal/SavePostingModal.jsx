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
				<p>해당 글은 00게시판에 업로드됩니다.</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>취소</Button>
				<Button variant="primary">확인</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default SavePostingModal;

function App() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Launch vertically centered modal
			</Button>

			<SavePostingModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	);
}

render(<App />);

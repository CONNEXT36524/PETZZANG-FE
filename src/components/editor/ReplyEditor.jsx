import { useState } from "react";
import "./ReplyEditor.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import ReplyService from "../../service/ReplyService";

function ReplyEditor(props) {
	const userCode = window.sessionStorage.getItem("userCode");
	//Posting Inputs
	const [inputs, setInputs] = useState({
		content: "",
		bundleId: 1,
		bundleOrder: 0,
		isDeleted: false,
	});

	// 비구조화 할당을 통해 값 추출
	const { content, bundleId, bundleOrder, isDeleted } = inputs;

	const onChange = (e) => {
		const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
		setInputs({
			...inputs, // 기존의 input 객체를 전개 구문으로 펼쳐서 복사한 뒤
			[name]: value, // name 키를 가진 값을 value 로 설정 (이때 [name]은 계산된 속성명 구문 사용),
		});
	};

	const formData = new FormData();

	//formData에 데이터 담기
	formData.append("content", content);
	formData.append("bundleId", bundleId);
	formData.append("bundleOrder", bundleOrder);
	formData.append("postId", props.postId);
	formData.append("boardType", props.boardType);
	formData.append("isDeleted", isDeleted);
	formData.append("userCode", parseInt(userCode));

	//console.log(userCode);
	//axios로 input 데이터 보내기
	async function onUpload() {
		ReplyService.createReplies(formData)
			.then(function (response) {
				console.log(response.data);
				// response
			})
			.catch(function (error) {
				// 오류발생시 실행
			})
			.then(function () {
				// 항상 실행
			});
	}

	return (
		<div className="ReplyEditorBox">
			<b>댓글 작성하기</b>
			<hr />
			<FloatingLabel controlId="floatingTextarea2" label="Comments">
				<Form.Control
					as="textarea"
					placeholder="Leave a comment here"
					style={{ height: "100px" }}
					name="content"
					onChange={onChange}
					value={content}
				/>
			</FloatingLabel>
			<br />
			<Button variant="warning" onClick={onUpload}>
				작성하기
			</Button>
		</div>
	);
}

export default ReplyEditor;

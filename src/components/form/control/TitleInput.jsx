import { React, useState } from "react";
import "../../../pages/Community/Posting/Posting.css";
import Form from "react-bootstrap/Form";

function TitleInput(props) {
	const [title, setTitle] = useState("");

	const onChange = (e) => {
		setTitle(e.target.value);
	};

	props.getTitle(title);

	return (
		<Form.Group className="mb-3" controlId="postingForm.TitleInput">
			<Form.Label className="formLabel">제목</Form.Label>
			<Form.Control
				type="text"
				size="lg"
				placeholder="제목을 입력하세요"
				onChange={onChange}
				value={title}
			/>
		</Form.Group>
	);
}
export default TitleInput;

import { React, useState, useRef } from "react";
import "../../../pages/Community/Posting/Posting.css";
import Form from "react-bootstrap/Form";

function FileInput() {
	const [imgFile, setImgFile] = useState("");
	const imgRef = useRef();

	// 이미지 업로드 input의 onChange
	const saveImgFile = () => {
		const file = imgRef.current.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImgFile(reader.result);
		};
	};

	console.log(imgFile);
	return (
		<Form.Group controlId="formFileLg" className="mb-3">
			<Form.Label className="formLabel">썸네일 사진 첨부</Form.Label>
			<Form.Control
				type="file"
				//accept="image/*"
				id="thumbnailImg"
				onChange={saveImgFile}
				ref={imgRef}
			/>

			<img
				// "" 안에 url 주소를 써야하는 듯
				// ex) images/af.png
				src={imgFile ? imgFile : ""}
				alt="프로필 이미지"
				className="thumbnailImg"
			/>
		</Form.Group>
	);
}
export default FileInput;

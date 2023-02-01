import { React, useState, useRef } from "react";
import "../../../pages/Community/Posting/Posting.css";
import Form from "react-bootstrap/Form";

function FileInput() {
	const [imgFile, setImgFile] = useState("");
	const imgRef = useRef();

	// 이미지 업로드 input의 onChange
	const showImgFile = () => {
		const file = imgRef.current.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImgFile(reader.result);
		};
	};

	return (
		<Form.Group controlId="formFileLg" className="mb-3" id="FileInputForm">
			<div>
				<img
					// require()를 통해 이미지 불러오긴
					src={
						imgFile
							? imgFile
							: require("../../../assets/noImage.png")
					}
					alt="프로필 이미지"
					className="thumbnailImg"
				/>
			</div>
			<div>
				<Form.Label className="formLabel">썸네일 사진 첨부</Form.Label>

				<Form.Control
					type="file"
					//accept="image/*"
					id="thumbnailImg"
					onChange={showImgFile}
					ref={imgRef}
				/>
			</div>
		</Form.Group>
	);
}
export default FileInput;

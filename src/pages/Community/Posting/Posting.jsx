import { useState, useEffect } from "react";
import React from "react";
import "./Posting.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Editor from "../../../components/editor/EditorComponent";
function simulateNetworkRequest() {
	return new Promise((resolve) => setTimeout(resolve, 2000));
}

function Posting(props) {
	const [desc, setDesc] = useState("");
	function onEditorChange(value) {
		setDesc(value);
	}

	//Button Loading State
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			simulateNetworkRequest().then(() => {
				setLoading(false);
			});
		}
	}, [isLoading]);

	const handleClick = () => setLoading(true);

	return (
		<div className="posting">
			<div className="banner">
				<h2> 펫짱 커뮤니티 {">"} 게시글 작성</h2>
			</div>
			<Navbar bg="light">
				<Container>
					<Navbar.Brand className="middleNavigationBar">
						HOME {">"} 커뮤니티 {">"} 일상 {">"} 게시글작성
					</Navbar.Brand>
				</Container>
			</Navbar>
			<Container>
				<br />
				<div className="containerHeader">
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
					>
						<Form.Label>제목</Form.Label>
						<Form.Control
							size="lg"
							type="email"
							placeholder="제목을 입력하세요"
						/>
					</Form.Group>
					<br />
					<div className="SelectType">
						<Form.Select aria-label="Default select example">
							<option>동물</option>
							<option value="1">강아지</option>
							<option value="2">고양이</option>
							<option value="3">관상어</option>
							<option value="4">햄스터</option>
							<option value="5">토끼</option>
							<option value="6">새</option>
							<option value="7">거북이</option>
							<option value="8">기타</option>
						</Form.Select>

						<Form.Select aria-label="Default select example">
							<option>품종</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>

						<Form.Select aria-label="Default select example">
							<option>성별</option>
							<option value="1">암컷</option>
							<option value="2">수컷</option>
						</Form.Select>
					</div>
				</div>
				<br />
				<div>
					<Editor value={desc} onChange={onEditorChange} />
				</div>

				<div className="containerFooter">
					<Button
						variant="primary"
						disabled={isLoading}
						onClick={!isLoading ? handleClick : null}
					>
						{isLoading ? "로딩중…" : "작성하기"}
					</Button>
				</div>
			</Container>
		</div>
	);
}

export default Posting;

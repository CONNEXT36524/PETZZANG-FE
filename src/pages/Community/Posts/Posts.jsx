import React, { useState } from "react";
import "./Posts.css";
import postImg from "../../../assets/maltese1.png";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import PostService from "../../../service/PostService";
import { useLocation } from "react-use";

function Posts(props) {
	const location = useLocation();
	const postId = location.state.usr.postId;

	//Editor
	const [desc, setDesc] = useState("");
	function onEditorChange(value) {
		setDesc(value);
	}

	function check() {
		console.log(location.state.usr.postId);
	}
	//Modal
	const [modalShow, setModalShow] = React.useState(false);

	//MNB 정보
	//const location = useLocation();
	const content = "HOME>커뮤니티>일상";

	console.log(PostService.getPosts(postId));
	return (
		<div>
			<CommunityBanner />

			<MiddleNav contents={content} />

			<Container className="articles">
				<br />

				<div className="articleHeaderTop">
					<div className="aht-section1"></div>
					<div className="aht-section2">
						<h1 className="aht-title">
							인형인가 말티즈인가우리 아이 너무 인형처럼 생기지
							않았나요?!나요?!
							나요?!나요?!나요?!나요?!나요?!이름은 소금이에요!
						</h1>
					</div>
					<div className="aht-section3">
						<h6 className="aht-viewNum">조회수 29</h6>
					</div>
				</div>
				<hr size="0" />
				<div className="articleHeaderBottom">
					<h6>소금엄마 | 2022.01.04 16:08:29</h6>
				</div>
				<br />
				<div className="articleBody">
					<img className="postImg" src={postImg}></img>
					<p>
						우리 아이 너무 인형처럼 생기지 않았나요?! <br />
						이름은 소금이에요!
					</p>
				</div>
			</Container>

			<Container className="comments">
				<h5>❤️ 2 💭 0</h5>
				<div>comments 공간</div>
				<div className="writeCommentBox">
					<div contentEditable="true" className="writeCommentContent">
						댓글을 남겨주세요.
					</div>
					<Button
						variant="warning"
						className="writeCommentBtn"
						onClick={check}
					>
						작성
					</Button>

					<InputGroup className="mb-3">
						<Form.Control
							placeholder="댓글을 남겨주세요."
							aria-label="댓글"
							aria-describedby="writer"
						/>
						<Button variant="outline-secondary" id="button-addon2">
							작성
						</Button>
					</InputGroup>
				</div>
			</Container>
		</div>
	);
}

export default Posts;

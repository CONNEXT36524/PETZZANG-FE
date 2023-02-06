import React, { useState, useEffect } from "react";
import "./Posts.css";
import GlobalNavColor from "../../../components/navbar/GNB/GlobalNavColor";
import postImg from "../../../assets/maltese1.png";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import PostService from "../../../service/PostService";

import ReplyEditor from "../../../components/editor/ReplyEditor";
import ReplyList from "../../../components/list/ReplyList";
import { useLocation } from "react-use";

function Posts(props) {
	GlobalNavColor("community");
	const location = useLocation();
	const postId = location.state.usr.postId;
	let postData = {};

	const [inputs, setInputs] = useState({
		titleName: "",
		boardType: "",
		pet: "",
		kind: "",
		sex: "",
		thumbnail: "",
		content: "",
		views: 0,
		likeNum: 0,
		update_time: "",
		userCode: 0,
	});

	// 비구조화 할당을 통해 값 추출
	const {
		titleName,
		boardType,
		pet,
		kind,
		sex,
		thumbnail,
		content,
		views,
		likeNum,
		update_time,
		userCode,
	} = inputs;

	const onChange = (e) => {
		const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
	};

	//Editor
	const [desc, setDesc] = useState("");
	function onEditorChange(value) {
		setDesc(value);
	}

	//Modal
	const [modalShow, setModalShow] = React.useState(false);

	//MNB 정보
	//const location = useLocation();

	useEffect(() => {
		let completed = false;
		async function get() {
			await PostService.getPosts(postId)
				.then(function (response) {
					// 성공 핸들링
					postData = response.data;
					setInputs({
						...inputs, // 기존의 input 객체를 전개 구문으로 펼쳐서 복사한 뒤
						titleName: postData["titleName"],
						boardType: postData["boardType"],
						pet: postData["pet"],
						kind: postData["kind"],
						sex: postData["sex"],
						thumbnail: postData["thumbnail"],
						content: postData["content"],
						views: postData["views"],
						likeNum: postData["likeNum"],
						update_time: postData["update_time"],
						userCode: postData["userCode"],
					});
				})
				.catch(function (error) {
					// 에러 핸들링
					console.log(error);
				})
				.then(function () {
					// 항상 실행되는 영역
				});
		}
		get();
		return () => {
			completed = true;
			console.log(completed);
		};
	}, []);

	return (
		<div className="posts">
			<CommunityBanner />

			<MiddleNav contents={"HOME>커뮤니티>일상"} />

			<Container className="articles">
				<br />

				<div className="articleHeaderTop">
					<div className="aht-section1"></div>
					<div className="aht-section2">
						<h1 className="aht-title">{titleName}</h1>
					</div>
					<div className="aht-section3">
						<h6 className="aht-viewNum">조회수 {views}</h6>
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
			<Container>
				<Button variant="warning" className="likeBtn">
					👍 좋아요
				</Button>
			</Container>

			<Container className="comments">
				<h5>
					❤️ {likeNum} 💭 {views}
				</h5>
				<div>리플 공간</div>
				<ReplyList />
				<ReplyEditor />
			</Container>
		</div>
	);
}

export default Posts;

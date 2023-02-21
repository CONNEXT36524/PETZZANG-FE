import React, { useState, useEffect, useRef } from "react";
import "./Posts.css";
import GlobalNavColor from "../../../components/navbar/GNB/GlobalNavColor";
import { Modal } from "react-bootstrap";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import PostService from "../../../service/PostService";
import ReplyService from "../../../service/ReplyService";
import ReplyList from "../../../components/list/ReplyList";
import ReplyEditor from "../../../components/editor/ReplyEditor";
import { useLocation } from "react-use";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import axios from "axios";

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

	//MNB 정보
	//const location = useLocation();

	//게시글 정보 가져오기
	useEffect(() => {
		let completed = false;
		async function get() {
			await PostService.getPosts(postId)
				.then(function (response) {
					// 성공 핸들링
					postData = response.data;
					//console.log(postData); //게시들 데이터 확인
					setInputs({
						...inputs, // 기존의 input 객체를 전개 구문으로 펼쳐서 복사한 뒤
						titleName: postData["titleName"],
						boardType: postData["boardType"],
						pet: postData["pet"],
						kind: postData["kind"],
						sex: postData["sex"],
						thumbnail: postData["thumbnail"],
						content: parse(postData["content"]),
						views: postData["views"],
						likeNum: postData["likeNum"],
						update_time: postData["update_time"]
							.replace("T", " ")
							.substring(0, 19),
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


	const [getImg, setGetImg] = useState(""); //이미지
	axios.get('/api/community/get/img', {
		params:{
			imgUrl : thumbnail
		}
	}).then((respond)=>{
		//console.log(respond.data)
		console.log(respond.data.body)
		setGetImg("data:image/png;base64,"+respond.data.body)
	}).catch(error => console.log(error))


	
	//댓글
	const [replies, setReplies] = useState([]); 
	
	useEffect(() => {
		let completed = false;
		async function get() {
			//댓글 정보 가져오기
			await ReplyService.getReplies(postId)
				.then(function (response) {
					// 성공 핸들링
					setReplies(response.data);
					console.log(response.data);
				})
				.catch(function (error) {
					// 에러 핸들링
					console.log(error);
				})
				.then(function () {
					// 항상 실행되는 영역
				});
				
			//조회수 올리기
			await PostService.updateView(postId)
				.then(function (response) {
					// 성공 핸들링
					console.log(response.data);
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

	function handleSubmit() {
		console.log("hello");
	}

	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	const handleClose = () => {
		setShow(false);
		navigate(`/community/daily`);
	};
	const handleShow = () => setShow(true);

	// 삭제 기능
	async function onRemove() {
		setShow(true);
		await PostService.deletePosts(postId)
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

	//좋아요 버튼
	let [likeBtnActive, setLikeBtnActive] = useState(false);
	//axios로 input 데이터 보내기
	async function onUpload() {
		if (likeBtnActive == false) {
			setLikeBtnActive(true);

			// 프론트에서 likeNum값 +1
			setInputs({
				...inputs,
				likeNum: likeNum + 1,
			});
			console.log(likeNum);

			// 백엔드로 좋아요 수 +1 보내기
			PostService.plusLikeNum(postId)
				.then(function (response) {
					//console.log(response.data);
				})
				.catch(function (error) {
					// 오류발생시 실행
				})
				.then(function () {
					// 항상 실행
				});
		} else {
			setLikeBtnActive(false);

			// 프론트에서 likeNum값 -1
			setInputs({
				...inputs,
				likeNum: likeNum - 1,
			});
			console.log(likeNum);

			// 백엔드로 좋아요 수 -1 보내기
			PostService.minusLikeNum(postId)
				.then(function (response) {
					//console.log(response.data);
				})
				.catch(function (error) {
					// 오류발생시 실행
				})
				.then(function () {
					// 항상 실행
				});
		}
	}


	return (
		<div className="posts-page">
			<CommunityBanner />

			<MiddleNav contents={"HOME>커뮤니티>일상"} boardType={boardType} />

			<Container className="posts">
				<div className="articles">
					<h6>
						<Badge pill bg="info">
							{pet}
						</Badge>

						{kind.length === 0 ? null : (
							<>
								{"  "}
								<Badge pill bg="info">
									{kind}
								</Badge>
							</>
						)}

						{sex.length === 0 ? null : (
							<>
								{"  "}
								<Badge pill bg="info">
									{sex}
								</Badge>
							</>
						)}
					</h6>

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
						<h6>
							{userCode} | {update_time}
						</h6>
					</div>
					<br />
					<img src={
							getImg=="data:image/png;base64,undefined"
							? require("../../../assets/noImage.png")
							: getImg
						}
						className="postImg"
					/>
					
					<div className="articleBody">{content}</div>
				</div>
				<button
					size="lg"
					className={likeBtnActive ? "likeBtnActive" : "likeBtn"}
					onClick={onUpload}
				>
					좋아요 👍🏻
				</button>
				<br />
				<div className="comments">
					<h5>
						❤️ 좋아요 {likeNum} 💭 댓글 {replies.length}
					</h5>
					<div className="replyListBox">
						{replies.length === 0 ? (
							<div className="noContents">
								이 글의 첫 댓글 주인공이 되어보세요 !
							</div>
						) : (
							<>
								<ReplyList postId={postId} replies={replies} />
							</>
						)}
					</div>
					<ReplyEditor
						postId={postId}
						boardType={boardType}
						onSubmit={handleSubmit}
						replies={replies}
						setReplies={setReplies}
					/>
				</div>
			</Container>
			<Container className="article-footer">
				<Button className="ms-auto" onClick={onRemove}>
					<b>글 삭제</b>
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Body>글이 삭제 되었습니다.</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		</div>
	);
}

export default Posts;

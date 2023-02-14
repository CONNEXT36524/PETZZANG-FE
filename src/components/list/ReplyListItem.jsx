import "./ReplyList.css";
import { Button, Container, Row, Col, Stack, Collapse } from "react-bootstrap";
import NReplyEditor from "../editor/NReplyEditor";
import { useState, useEffect } from "react";
import NReplyService from "../../service/ReplyService";
import NReplyList from "./NReplyList";

function ReplyListItem({ reply }) {
	//대댓글 기능
	const [nReplies, setNReplies] = useState([]);
	//대댓글 정보 가져오기
	useEffect(() => {
		let completed = false;
		async function get() {
			await NReplyService.getNReplies(reply.postId, reply.bundleId)
				.then(function (response) {
					// 성공 핸들링
					setNReplies(response.data);
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

	//data <- postId
	const onRemove = (data) => {};
	const userImg = window.sessionStorage.getItem("userImg");
	const replyDate = reply.createTime.split("T");
	const replyTime = replyDate[1].split(".");

	const [open, setOpen] = useState(false);
	const [btnType, setBtnType] = useState("");

	function handleCollapse(choice) {
		setOpen(!open);
		setBtnType(choice);
	}

	return (
		<>
			{reply === undefined || reply.bundleOrder !== 0 ? null : (
				<Container
					className="reply-item"
					onClick={() => onRemove(reply.postId)}
				>
					<div className="ReplyBody">
						<div>
							<div className="user-div">
								<img className="user-Thumnbail" src={userImg} />
							</div>
						</div>
						<div>
							<h6>
								<b>{reply.userCode}</b>
							</h6>
							<div>{reply.content}</div>
							<div className="replyTime">
								{replyDate[0]} {replyTime[0]}
							</div>
						</div>
						<div>
							<Button
								onClick={() => handleCollapse("작성하기")}
								aria-controls="example-collapse-text"
								aria-expanded={open}
								variant="outline-primary"
							>
								대댓글 쓰기
							</Button>
							<Button
								onClick={() => handleCollapse("수정하기")}
								aria-controls="example-collapse-text"
								aria-expanded={open}
								variant="outline-success"
							>
								수정
							</Button>
							<Button variant="outline-danger">삭제</Button>
						</div>
					</div>
					<div className="Replyfooter">
						<Collapse in={open}>
							<div id="example-collapse-text">
								<NReplyEditor
									postId={reply.postId}
									boardType={reply.boardType}
									bundleId={reply.bundleId}
									btnType={btnType}
								/>
							</div>
						</Collapse>
					</div>
					{nReplies.length === 0 ? null : (
						<>
							<NReplyList
								nReplies={nReplies}
								replyId={reply.bundleId}
							/>
						</>
					)}
				</Container>
			)}
		</>
	);
}

export default ReplyListItem;

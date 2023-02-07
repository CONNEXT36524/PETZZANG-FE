import "./ReplyList.css";
import profileIcon from "../../assets/user.png";
import trashIcon from "../../assets/trash.png";
import editIcon from "../../assets/pencil.png";
import { Button, Container, Row, Col, Stack, Collapse } from "react-bootstrap";
import { useState } from "react";
import NReplyEditor from "../editor/NReplyEditor";

function ReplyListItem({ reply }) {
	//data <- postId
	const onRemove = (data) => {};

	const [open, setOpen] = useState(false);

	function writeNReply() {}
	return (
		<>
			{reply === undefined ? null : (
				<Container
					className="reply-item"
					onClick={() => onRemove(reply.postId)}
				>
					<div>
						<Stack direction="horizontal" gap={3}>
							<div>
								<h6>
									<b>{reply.userCode}username</b>
								</h6>
							</div>
							<div className="ms-auto">{reply.createTime}</div>
						</Stack>
					</div>
					<hr id="profile-line" size="1" />
					<div>
						<p>{reply.content}</p>
					</div>
					<hr id="profile-line" size="1" />
					<Stack direction="horizontal" gap={3}>
						<Button
							onClick={() => setOpen(!open)}
							aria-controls="example-collapse-text"
							aria-expanded={open}
							variant="outline-primary"
						>
							대댓글 쓰기
						</Button>
						<Button variant="outline-success ms-auto">수정</Button>
						<div className="vr" />
						<Button variant="outline-danger">삭제</Button>
					</Stack>
					<Collapse in={open}>
						<div id="example-collapse-text">
							<NReplyEditor />
						</div>
					</Collapse>
				</Container>
			)}
		</>
	);
}

export default ReplyListItem;

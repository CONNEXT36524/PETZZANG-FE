import "./NReplyList.css";
import { Button, Container, Collapse } from "react-bootstrap";
import { useState } from "react";
import NReplyEditor from "../editor/NReplyEditor";

function NReplyListItem({ nReply }) {
	//data <- postId
	const onRemove = (data) => {};
	const userImg = window.sessionStorage.getItem("userImg");
	const nReplyDate = nReply.createTime.split("T");
	const nReplyTime = nReplyDate[1].split(".");

	const [open, setOpen] = useState(false);
	const [btnType, setBtnType] = useState("");
	function handleCollapse(choice) {
		setOpen(!open);
		setBtnType(choice);
	}
	return (
		<>
			{nReply === undefined ? null : (
				<Container
					className="nReply-item"
					onClick={() => onRemove(nReply.postId)}
				>
					<div className="NReplyBody">
						<div>
							<div className="user-div">
								<img className="user-Thumnbail" src={userImg} />
							</div>
						</div>
						<div>
							<h6>
								<b>{nReply.userCode}</b>
							</h6>
							<div>{nReply.content}</div>
							<div className="nReplyTime">
								{nReplyDate[0]} {nReplyTime[0]}
							</div>
						</div>
						<div>
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
					<div className="NReplyfooter">
						<Collapse in={open}>
							<div id="example-collapse-text">
								<NReplyEditor
									postId={nReply.postId}
									boardType={nReply.boardType}
									bundleId={nReply.bundleId}
									btnType={btnType}
								/>
							</div>
						</Collapse>
					</div>
				</Container>
			)}
		</>
	);
}

export default NReplyListItem;

import "./NReplyList.css";
import { Button, Container, Collapse, Modal } from "react-bootstrap";
import { useState } from "react";
import NReplyEditor from "../editor/NReplyEditor";
import ReplyService from "../../service/ReplyService";
import DeleteReplyModal from "../modal/DeleteReplyModal";
function NReplyListItem({ nReply }) {
	//data <- postId
	const userImg = window.sessionStorage.getItem("userImg");
	const nReplyDate = nReply.createTime.replace("T", " ").substring(0, 19);

	const [open, setOpen] = useState(false);
	const [btnType, setBtnType] = useState("");
	function handleCollapse(choice) {
		setOpen(!open);
		setBtnType(choice);
	}
	const [modalShow, setModalShow] = useState(false);

	function handleClose() {
		setModalShow(false);
	}
	async function onRemove() {
		await ReplyService.deleteReplies(nReply.replyId)
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

	function handleDelete() {
		setModalShow(true);
		onRemove();
	}
	return (
		<>
			{nReply === undefined ? null : nReply.deleted === true ? (
				<div className="nReply-item-deleted">글이 삭제 되었습니다.</div>
			) : (
				<Container className="nReply-item">
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
							<div className="nReplyTime">{nReplyDate}</div>
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
							<Button
								variant="outline-danger"
								onClick={() => handleDelete()}
							>
								삭제
							</Button>

							<DeleteReplyModal
								show={modalShow}
								onHide={() => handleClose()}
							/>
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

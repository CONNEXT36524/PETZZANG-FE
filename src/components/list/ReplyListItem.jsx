import trashIcon from "../../assets/trash.png";
import { Button, Container } from "react-bootstrap";

function ReplyListItem({ reply }) {
	//data <- postId
	const onRemove = (data) => {};

	return (
		<>
			{reply === undefined ? null : (
				<div
					className="reply-item"
					onClick={() => onRemove(reply.postId)}
				>
					<p> {reply.titleName} </p>
				</div>
			)}
		</>
	);
}

export default ReplyListItem;

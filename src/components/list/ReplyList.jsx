import ReplyListItem from "./ReplyListItem";
import { Container } from "react-bootstrap";

function ReplyList(replies) {
	console.log(replies.replies);
	return (
		<div className="ReplyListBox">
			{replies.replies.map((item, idx) => (
				<div key={idx}>
					<ReplyListItem
						reply={item}
						key={idx}
						onRemove={replies.onRemove}
					/>
				</div>
			))}
		</div>
	);
}
export default ReplyList;

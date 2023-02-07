import ReplyListItem from "./ReplyListItem";
import { Container } from "react-bootstrap";

function ReplyList(props) {
	console.log(props.replies);
	return (
		<div className="ReplyListBox">
			{props.replies.map((item, idx) => (
				<div key={idx}>
					<ReplyListItem
						reply={item}
						key={idx}
						onRemove={props.onRemove}
					/>
				</div>
			))}
		</div>
	);
}
export default ReplyList;

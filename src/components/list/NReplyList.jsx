import NReplyListItem from "./NReplyListItem";

function NReplyList(props) {
	console.log(props.nReplies);
	return (
		<div className="nReplyListBox">
			{props.nReplies.map((item, idx) => (
				<div key={idx}>
					<NReplyListItem
						nReply={item}
						key={idx}
						onRemove={props.onRemove}
					/>
				</div>
			))}
		</div>
	);
}
export default NReplyList;

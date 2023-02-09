import NReplyListItem from "./NReplyListItem";

function NReplyList(props) {
	return (
		<div className="nReplyListBox">
			{props.nReplies.map((item, idx) => (
				<div key={idx}>
					{item.bundleOrder === 0 ||
					props.replyId !== item.bundleId ? null : (
						<NReplyListItem
							nReply={item}
							key={idx}
							onRemove={props.onRemove}
						/>
					)}
				</div>
			))}
		</div>
	);
}
export default NReplyList;

import ReplyListItem from "./ReplyListItem";

function ReplyList(props) {
	return (
		<div className="ReplyListBox">
			{props.replies.map((item, idx) => (
				<div key={idx}>
					{item.bundleOrder !== 0 ? null : (
						<ReplyListItem
							reply={item}
							key={idx}
							onRemove={props.onRemove}
						/>
					)}
				</div>
			))}
		</div>
	);
}
export default ReplyList;

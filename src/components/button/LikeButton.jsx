import { Button } from "react-bootstrap";

function LikeButton(props) {
	const handleClick = () => {};

	return (
		<Button className="likeBtn" onClick={handleClick}>
			👍 좋아요
		</Button>
	);
}

export default LikeButton;

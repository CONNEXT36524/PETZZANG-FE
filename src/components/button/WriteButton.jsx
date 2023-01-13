import { useNavigate } from "react-router-dom";

function WriteButton(props) {
	//mnb 정보 전달
	let content = props.content;

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/community/posting", {
			state: {
				contents: content,
			},
		});
	};

	return (
		<button className="writeBtn" onClick={handleClick}>
			{" "}
			✏️ 글쓰기{" "}
		</button>
	);
}

export default WriteButton;

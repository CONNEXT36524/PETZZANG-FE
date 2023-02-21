import React from "react";
import "./ImgCard.css";
import { useNavigate } from "react-router";

function ImgCard(props) {
	// console.log(props.item)

	const navigate = useNavigate();

	//data <- postId
	const onClickHandler = (data) => {
		navigate("/community/posts", {
			state: {
				postId: data,
			},
		});
	};

	return (
		<>
			{props.item === undefined || props.item === null ? 
			<div className="card">

					<img
						src="../img/dog1.png"
						className="card-img"
						alt="이미지"
					/>
					{/* <img src="../img/dog1.png" className="card-img" alt="이미지"/>  */}
				</div> : (
				<div
					className="card"
					onClick={() => onClickHandler(props.item.postId)}
				>
					<p id="imgContent"> {props.item.titleName} </p>
					<img
						src={props.item.thumbnail}
						className="card-img"
						alt="이미지"
					/>
					{/* <img src="../img/dog1.png" className="card-img" alt="이미지"/>  */}
				</div>
			)}
		</>
	);
}

export default ImgCard;

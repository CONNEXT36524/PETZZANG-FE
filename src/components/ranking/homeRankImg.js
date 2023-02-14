import React from "react";
import "./homeRankImg.css"

function homeRankImg() {
	//console.log(props)

	//const navigate = useNavigate();

	//data <- postId
	// const onClickHandler = (data) => {
	// 	navigate("/community/posts", {
	// 		state: {
	// 			postId: data,
	// 		},
	// 	});
	// };

	return (
		<>
			{/* {props.item === undefined ? null : (
				<div
					className="card"
					onClick={() => onClickHandler(props.item.postId)}
				>
					<p id="imgContent"> {props.item.titleName} </p>
					<img
						src="public\img\dog1.png"
						className="card-img"
						alt="이미지"
					/>
					{/* <img src="../img/dog1.png" className="card-img" alt="이미지"/>  
				</div>
			)} 
        */}
            {/* ################### 1등 ######################## */}
            <div
				className="homeCardDiv1"
				//onClick={() => onClickHandler(props.item.postId)}
			>
                <img src="../img/dog1.png" 
                    className="homeRankImage"
                    alt="이미지"
                />
            </div>

            {/* ################### 2등 ######################## */}
            <div
				className="homeCardDiv2"
				//onClick={() => onClickHandler(props.item.postId)}
			>
                <img src="../img/dog1.png" 
                    className="homeRankImage"
                    alt="이미지"
                />
            </div>

            {/* ################### 3등 ######################## */}
            <div
				className="homeCardDiv3"
				//onClick={() => onClickHandler(props.item.postId)}
			>
                <img src="../img/dog1.png" 
                    className="homeRankImage"
                    alt="이미지"
                />
            </div>

            {/* ################### 4등 ######################## */}
            <div
				className="homeCardDiv4"
				//onClick={() => onClickHandler(props.item.postId)}
			>
                <img src="../img/dog1.png" 
                    className="homeRankImage"
                    alt="이미지"
                />
            </div>

		</>
	);
}

export default homeRankImg;

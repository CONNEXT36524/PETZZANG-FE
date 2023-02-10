import React from "react";
import { useNavigate } from "react-router";
import "./homeRankImg.css"
import styled from "styled-components";

const StyledButton = styled.button`
    /*공통 스타일*/
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;


    /*색상 */
    background: #228be6;
    &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
    }

    /*기타 */
    & + & {
        margin-left: 1rem;
    }
`

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

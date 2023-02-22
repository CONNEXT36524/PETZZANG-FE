import React, { useState, useEffect } from "react";
import "./ImgCard.css";
import { useNavigate } from "react-router";
import axios from "axios";

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

	//console.log(props.item.thumbnail);

	//kic에서 이미지 데이터 가져오기
	const [getImg, setGetImg] = useState("");
	useEffect(() => {
        let completed = false; 
		if(props.item!=null){
			async function get() {
				await axios.get('/api/community/get/img', {
					params:{
						imgUrl : props.item.thumbnail
					}
				}).then((respond)=>{
					//console.log(respond.data)
					//console.log(respond.data.body)
					setGetImg("data:image/png;base64,"+respond.data.body)
				}).catch(error => console.log(error))
			}
			get()
			return () => {
				completed = true;
			};
		}
	}, []);

	

	return (
		<>
			{props.item === undefined || props.item === null ? 
			<div className="card">

					<img
						src={require("../../assets/noImage.png")}
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
						src={getImg}
						className="card-img"
						alt="이미지"
					/>
				</div>
			)}
		</>
	);
}

export default ImgCard;

import React from "react";
import "./homeRankImg.css"
import { useEffect, useState } from "react";
import Rankingimg from "./Rankingimg";
import axios from "axios";

function HomeRankImg() {
	const now=new Date();
    const [startday,setstartday]=useState(new Date(now.setDate(now.getDate()-now.getDay())));
	const startyear=startday.getFullYear();
    const startMonth=startday.getMonth()+1;
    const startDate=startday.getDate();
	const [data,setdata]=useState('');
	const type="week"
	useEffect(()=>{ 
        loadranking()
    },[])

	async function loadranking(){
        console.log(startyear.toString()+String(startMonth).padStart(2,'0')+String(startDate).padStart(2,'0'))
        try{
        const response = await axios.get("/api/ranking/load",{params:{date:startyear.toString()+String(startMonth).padStart(2,'0')+String(startDate).padStart(2,'0'), type:type}});
        console.log(response.data);
        setdata(response.data)
        }
        catch(error) {
        console.log(error)
            // 오류발생시 실행
        };
    }
	console.log(data)
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

export default HomeRankImg;

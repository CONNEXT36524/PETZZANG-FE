import "./BannerDetail.css";
import "./Banner.css";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux/";
import ImgCard from "../community/ImgCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

function RankingBanner(props) {
	const img = useSelector((state) => state.Rank.firstimg);

	console.log(img)

	//kic에서 이미지 데이터 가져오기
	const [getImg, setGetImg] = useState("");
	if(img!='' && img!=undefined)
		{
		axios.get('/api/community/get/img', {
			params:{
				imgUrl : img.thumbnail
			}
		}).then((respond)=>{
			//console.log(respond.data)
            //console.log(respond.data.body)
			setGetImg("data:image/png;base64,"+respond.data.body)
		}).catch(error => console.log(error))
}

	
	return (
		<div className="rankingBanner">
			<Container id="bannerContainer">
				<div className="rankingbanner_section">
					<div className="bannerContainerText">
						<h2 className="bannerContainerTitle">펫짱 랭킹</h2>
						<br />
						<p className="bannerContainerContent">
							사랑스러운 반려동물을 자랑할 수 있는 공간,
							<br />
							반려동물을 키우며 궁금했던 점을 질문하는 공간,
							<br />
							펫짱 커뮤니티에서 활동해보세요
						</p>
					</div>
				</div>
				{
				img==='' || img===undefined
				? <></>
				:
					<div className="banner_circle">
						<img
							src={getImg}
							className="circle-img"
							alt="이미지"
						/>
						{/* <ImgCard item={img}/> */}
					</div>
}
			</Container>
		</div>
	);
}

export default RankingBanner;

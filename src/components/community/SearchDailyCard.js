import './Search.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

// 검색게시판에서
// 일상 게시글 & 자랑 게시글 띄우는 card
function SearchDailyCard(props) {  

  const navigate = useNavigate();
  const onClickHandler=(data)=> {
    navigate("/community/posts", {
			state: {
				postId: data,
			},
		});
  }

  //kic에서 이미지 데이터 가져오기
	const [getImg, setGetImg] = useState("");
	useEffect(() => {
    let completed = false; 
		async function get() {
			await axios.get('/api/community/get/img', {
				params:{
					imgUrl : props.data.thumbnail
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
	}, []);

  const [userName, setUserName] = useState("");
	useEffect(() => {
    let completed = false; 
		async function get() {
			await axios.get('/api/get/username', {
				params:{
					userCode : props.data.userCode
				}
			}).then((respond)=>{
				//console.log(respond.data)
        setUserName(respond.data)
			}).catch(error => console.log(error))
		}
		get()
		return () => {
			completed = true;
		};
	}, []);

  return (
    <div className='searchCardContainer' onClick={() => onClickHandler(props.data.postId)}>
      <img src={
				getImg=="data:image/png;base64,undefined"
				? require("../../assets/noImage.png")
				: getImg
				} className="searchCardImg" alt="이미지"
      />
      <div className='searchCardContent'>
        <h3>{props.data.titleName}</h3>
        {/* <h5>{props.data.content}</h5> */}
        <br/>
        <h5>{userName}</h5>
      </div>
    </div>
  );
}

export default SearchDailyCard;
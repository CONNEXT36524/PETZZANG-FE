import './Search.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

// 검색게시판에서
// 질문 게시글 & 제품추천 게시글 띄우는 card
function SearchQuestionCard(props) {  

  const navigate = useNavigate();
  const onClickHandler=(data)=> {
    navigate("/community/posts", {
			state: {
				postId: data,
			},
		});
  }

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
    <div className='searchCardContainer'
      onClick={() => onClickHandler(props.data)}>
      <div className='searchCardContent'>
        <h3>{props.data.titleName}</h3> <br/>
        <h5>{userName}</h5>
      </div>
    </div>
  );
}

export default SearchQuestionCard;
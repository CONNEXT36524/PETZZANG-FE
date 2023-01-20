import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import "bootstrap/dist/css/bootstrap.min.css";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Container from "react-bootstrap/Container";
import "./Daily.css";
import Offcanvas from "../../../components/community/OffCanvas.js";
import Imgdiv from "../../../components/community/Imgdiv.js";
import TypeBtn from "../../../components/community/TypeBtn.js";
import Paging from "../../../components/community/Paging.js";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import WriteButton from "../../../components/button/WriteButton";
import { rpaging } from "../../../Slice/PagingSlice";
import NoContent from "./NoContent";
import axios from "axios";

function CallImgCard(props) {
	//console.log(props)
	//typeValue가 0이면 강아지 / 1이면 고양이 ...

	var arr = [];

	for(let divNum=0; divNum<props.propsData.length; divNum=divNum+4) {
		// console.log(props.propsData.slice(divNum,(divNum+4)))
		arr.push (
			<div className='ImgCardDiv' key={divNum}> 
				<Imgdiv data={props.propsData.slice(divNum,(divNum+4))}/> 
			</div>
		)
	}
	return arr;
}



function Daily() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changepagetype("community"));
		dispatch(rpaging(setPage));
	}, [dispatch]);

	const [typeValue, setTypeValue] = useState(""); //OffCanvas에서 Daily로 데이터가져오기
	// console.log(typeValue);

	const [typeBtn, setTypeBtn] = useState([]); //TypeBtn에서 Daily로 데이터가져오기
	//console.log(typeBtn)

	//데이터 가져오기
	const [dList, setdList] = useState([]);
	useEffect(() => {
		axios.get('/api/community/board/daily')
		.then((respondList)=>{
			//console.log(respondList.data)
			setdList(respondList.data)
		})
		.catch(error => console.log(error))
	}, []);



	// pagination 설정
	const currentPage = useSelector(state => state.PagingR.page);
    const cntPerPage = useSelector(state => state.PagingR.cntPerPage);
    const total = useSelector(state => state.PagingR.total);
    const range = useSelector(state => state.PagingR.range);

    const setPage = {
        cntPerPage : 10, 
        total : 40, 
        range : 5 
    }

	// 백엔드에서 게시글 list 받아와서 questionData 대신 sliceList를 map에 사용
	//  
	// const sliceList = () =>{ 
    //         setPage.total = list.length
    //         dispatch(rpaging(setPage))
    //         return list.slice(cntPerPage*(currentPage-1), cntPerPage*currentPage);
    // } 
	
	return ( 
		<>
			<CommunityBanner />
			<MiddleNav contents="HOME>커뮤니티>일상" />
			<Container>
				<div className="dailyMain">
					<h2 className="boardName"> 일상 게시판</h2> <br/>

					{
						dList.length === 0
						? <NoContent/>
						: 
						<>
							{/* Offcanvas에서 받은 데이터를 TypeBtn에 보내고 
								TypeBtn에서 선택된 값들로 필터링해서 callImgCard 호출..  */}
							<Offcanvas setTypeValue={setTypeValue} />
							<TypeBtn data={typeValue} setTypeBtn={setTypeBtn}/>
							<CallImgCard propsData={dList} typeValue={typeValue} typeBtn={typeBtn}/>
							<br/> <br/>

							<div className="writeBtnDiv">
								<Paging />
								<WriteButton content="HOME>커뮤니티>일상>게시글 작성" />
							</div>
						</>
					}
					
					
				</div>
			</Container>
		</>
	);
}

export default Daily;

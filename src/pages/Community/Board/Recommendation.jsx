import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import styled from 'styled-components';
import {Container} from "react-bootstrap";
import Paging from "../../../components/community/Paging.js";
import NoContent from "./NoContent";
import "./Daily.css";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import WriteButton from "../../../components/button/WriteButton";
import { rpaging } from "../../../Slice/PagingSlice";
import axios from "axios";

const StyledTable = styled.table`
	border-collapse: collapse;
	thead {
		tr {
			th {
				padding: 15px 20px;
				font-weight: 800;
				border-bottom: 2px solid #eee;
				text-align: center;
			}
		}
	}
	tbody {
		tr {
			td {
				padding: 10px 15px;
				border-bottom: 2px solid #eee;
				text-align: center;
				height: 80px;
			}
		}
	}
	.second-col {
		width: 400px;
	}
	.tbodyDiv:hover {
		cursor: pointer;
	}
`;


function Recommendation() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changepagetype("community"));
		dispatch(rpaging(setPage));
	}, [dispatch]);

	//데이터 가져오기
	const [rList, setrList] = useState([]);
	useEffect(() => {
		axios.get('/api/community/board/recommendation')
		.then((respondList)=>{
			console.log(respondList.data)
			setrList(respondList.data)
		})
		.catch(error => console.log(error))
	}, []);

	const navigate = useNavigate();
	const recommendationClick = (props) => {
		navigate("/community/posts", {
			state: {
				title: "a",
			},
		});
	};

	const currentPage = useSelector(state => state.PagingR.page);
    const cntPerPage = useSelector(state => state.PagingR.cntPerPage);
    const total = useSelector(state => state.PagingR.total);
    const range = useSelector(state => state.PagingR.range);

    const setPage = {
        cntPerPage : 10, 
        total : 40, 
        range : 5 
    }

	// 백엔드에서 게시글 list 받아와서 recommendationData 대신 sliceList를 map에 사용
	//  
	// const sliceList = () =>{ 
    //         setPage.total = list.length
    //         dispatch(rpaging(setPage))
    //         return list.slice(cntPerPage*(currentPage-1), cntPerPage*currentPage);
    // } 

	return (
		<>
			<CommunityBanner />
			<MiddleNav contents="HOME>커뮤니티>제품 추천" />

			<Container>
				<div className="recommendationMain">
					<h2 className="boardName">🎁 제품 추천 게시판</h2> <br/> <br/>
					{
						rList.length === 0
						? <NoContent/>
						: 
						<>
						<StyledTable className="tableDiv">
							<thead>
								<tr>
									<th> No. </th>
									<th> 이미지 </th>
									<th className="second-col"> 제목 </th>
									<th> 글쓴이 </th>
									<th> 작성 날짜 </th>
									<th> 조회수 </th>
									<th> 좋아요수 </th>
								</tr>
							</thead>

							<tbody className="tbodyDiv">
								{rList.map((data, num) => (
									<tr num={num} key={num} onClick={()=>recommendationClick(data.rNum)}>
										{	
											data.rNum < 0 
											? <td> 공지 </td>
											: <td> {data.rNum + 1} </td>
										}
										<td> {" "} <img src={data.thumbnail} className="recommendationImg" alt="이미지"/>{" "} </td>
										<td> {data.rTitle} </td>
										<td> {data.rWriter} </td>
										<td> {data.rDate} </td>
										<td> {data.rClickNum} </td>
										<td> {data.rLikeNum} </td>
									</tr>	
								))}
							</tbody>
						</StyledTable>
						<br/><br/>
						<div className="writeBtnDiv">
							<Paging />
							<WriteButton />
						</div>		
						</>
					}
					<br/><br/>
				</div>
			</Container>
		</>
	);
}

export default Recommendation;

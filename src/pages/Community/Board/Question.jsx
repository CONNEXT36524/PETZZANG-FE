import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Container from "react-bootstrap/Container";
import "./Daily.css";
import Paging from "../../../components/community/Paging.js";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import WriteButton from "../../../components/button/WriteButton";
import { rpaging } from "../../../Slice/PagingSlice";
import NoContent from "./NoContent";
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

function Question() {
	// 상단 navbar 색깔 바꾸기
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changepagetype("community"));
		dispatch(rpaging(setPage));
	}, [dispatch]);


	//데이터 가져오기
	const [qList, setqList] = useState([]);
	useEffect(() => {
		axios.get('/api/community/board/question')
		.then((respondList)=>{
			//console.log(respondList.data)
			setqList(respondList.data)
		})
		.catch(error => console.log(error))
	}, []);


	const navigate = useNavigate();

	const questionClick = (props) => {
		//console.log(props)
		navigate("/community/posts", {
			state: {
				title: "a",
			},
		});
	};


	// 하단 pagination 설정
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
			<MiddleNav contents="HOME>커뮤니티>질문" />

			<Container>
				<div className="questionMain">
					<h2 className="boardName">질문 게시판</h2> <br/><br/>

					{
						qList.length === 0
						? <NoContent/>
						:
						<>
						<StyledTable className="tableDiv">
							<thead>
								<tr>
									<th> No. </th>
									<th className="second-col"> 제목 </th>
									<th> 글쓴이 </th>
									<th> 작성 날짜 </th>
									<th> 조회수 </th>
									<th> 좋아요수 </th>
								</tr>
							</thead>

							<tbody className="tbodyDiv">
								{qList.map((data, num) => (
									<tr num={num} key={num}
										//추후 게시글 id 넘기기
										onClick={() => questionClick(data.postId)}
									>
										{data.postId < 0 ? (
											<td> 공지 </td>
										) : (
											<td> {num+1} </td>
										)}

										<td className="second-col">
											{" "}{data.titleName}{" "}
										</td>
										{/* 일단 userCode(숫자) 넣어놓음  */}
										<td> {data.userCode} </td> 
										<td> {data.createTime} </td>
										<td> {data.views} </td>
										<td> {data.likeNum} </td>
									</tr>
								))}
							</tbody>
						</StyledTable>{" "}
						<br/><br/>
						<div className="writeBtnDiv">
							<Paging />
							<WriteButton content="HOME>커뮤니티>질문>게시글 작성" />
						</div>
						</>
					}
					
				</div>
			</Container>
		</>
	);
}

export default Question;

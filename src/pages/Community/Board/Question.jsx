import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Container from "react-bootstrap/Container";
import "./Daily.css";
import Paging from "../../../components/community/Paging.js";
import CommunityBanner from "../../../components/banner/CommunityBanner";

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

// 공지글은 qNum을 마이너스값으로 해서 sort했을때 가장 위에 오게 하고 싶은데
// 데이터베이스에서 sort해서 가져올수 있나?
const questionData = [
	{
		qNum: 0,
		qTitle: "강아지가 계속 발을 핥아요",
		qWriter: "소금엄마",
		qDate: "2023.01.09",
		qClickNum: "987",
		qLikeNum: "32",
	},
	{
		qNum: 1,
		qTitle: "다들 산책훈련 어떻게 하시나요?",
		qWriter: "라라",
		qDate: "2023.01.08",
		qClickNum: "631",
		qLikeNum: "27",
	},
	{
		qNum: -1,
		qTitle: "질문 게시판 이용시 주의사항",
		qWriter: "관리자",
		qDate: "2023.01.01",
		qClickNum: "1234",
		qLikeNum: "0",
	},
];

function Question() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changepagetype("community"));
	}, [dispatch]);

	const questionClick = (props) => {
		console.log(props);
	};

	return (
		<>
			<CommunityBanner />
			<MiddleNav contents="HOME>커뮤니티>질문" />

			<Container>
				<div className="questionMain">
					<h2 className="boardName">질문 게시판</h2> <br />
					<br />
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
							{questionData.map((data, num) => (
								<tr
									num={num}
									onClick={() => questionClick(data.qNum)}
								>
									{data.qNum < 0 ? (
										<td> 공지 </td>
									) : (
										<td> {data.qNum + 1} </td>
									)}

									<td className="second-col">
										{" "}
										{data.qTitle}{" "}
									</td>
									<td> {data.qWriter} </td>
									<td> {data.qDate} </td>
									<td> {data.qClickNum} </td>
									<td> {data.qLikeNum} </td>
								</tr>
							))}
						</tbody>
					</StyledTable>{" "}
					<br />
					<br />
					<div className="writeBtnDiv">
						<Paging />
						<button
							className="writeBtn"
							onClick={() =>
								(window.location.href = "/community/posting")
							}
						>
							{" "}
							✏️ 글쓰기{" "}
						</button>
					</div>
				</div>
			</Container>
		</>
	);
}

export default Question;

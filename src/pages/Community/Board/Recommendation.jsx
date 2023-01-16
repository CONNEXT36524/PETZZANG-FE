import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import styled from "styled-components";
import { Navbar, Container } from "react-bootstrap";
import Paging from "../../../components/community/Paging.js";
import "./Daily.css";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import WriteButton from "../../../components/button/WriteButton";

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

const recommendationData = [
	{
		rNum: 0,
		rImg: "",
		rTitle: "강아지 하네스 추천해주세요~",
		rWriter: "소금엄마",
		rDate: "2023.01.11",
		rClickNum: "34",
		rLikeNum: "8",
	},
	{
		rNum: 1,
		rImg: "",
		rTitle: "고양이 모래 추천합니다!",
		rWriter: "치즈맘",
		rDate: "2023.01.10",
		rClickNum: "42",
		rLikeNum: "11",
	},
	{
		rNum: -1,
		rImg: "",
		rTitle: "제품 추천 게시판 이용시 주의사항",
		rWriter: "관리자",
		rDate: "2023.01.01",
		rClickNum: "987",
		rLikeNum: "0",
	},
];

function Recommendation() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changepagetype("community"));
	}, [dispatch]);

	const navigate = useNavigate();

	const recommendationClick = (props) => {
		navigate("/community/posts", {
			state: {
				title: "a",
			},
		});
	};

	return (
		<>
			<CommunityBanner />
			<MiddleNav contents="HOME>커뮤니티>제품 추천" />

			<Container>
				<div className="recommendationMain">
					<h2 className="boardName">제품 추천 게시판</h2> <br />
					<br />
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
							{recommendationData.map((data, num) => (
								<tr
									num={num}
									onClick={() =>
										recommendationClick(data.rNum)
									}
								>
									{data.rNum < 0 ? (
										<td> 공지 </td>
									) : (
										<td> {data.rNum + 1} </td>
									)}

									<td>
										{" "}
										<img
											src="../../img/dog1.png"
											className="recommendationImg"
										/>{" "}
									</td>
									<td> {data.rTitle} </td>
									<td> {data.rWriter} </td>
									<td> {data.rDate} </td>
									<td> {data.rClickNum} </td>
									<td> {data.rLikeNum} </td>
								</tr>
							))}
						</tbody>
					</StyledTable>
					<br />
					<br />
					<div className="writeBtnDiv">
						<Paging />
						<WriteButton />
					</div>
				</div>
			</Container>
		</>
	);
}

export default Recommendation;

import "./App.css";
import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Ranking from "./pages/ranking/Ranking";
import Posting from "./pages/Community/Posting/Posting";
import { useSelector } from "react-redux/";
import Daily from "./pages/Community/Board/Daily";
import Search from "./pages/Community/Board/Search";
import KakaoLogin from "./pages/Login/KakaoLogin";
import { useNavigate, useSearchParams } from 'react-router-dom';
import {FiSearch} from "react-icons/fi";

import "bootstrap/dist/css/bootstrap.css"; //bootstrap css 적용

function App() {

	// 로그인
	const pagetype = useSelector((state) => state.Nav.pagetype);
	const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
	const rest_api_key = process.env.REACT_APP_REST_API_KEY;
	const KAKAO_AUTH_URL = process.env.REACT_APP_KAKAO_AUTH_URL;


	// 검색
	const [searchText, setSearchText] = useState('');
	const onChangeSearchText = (e) => {
        setSearchText(e.target.value);
    };

	const search = (e) => {
		console.log(searchText)
        // enter키 눌렀을때
        if(e.key === "Enter") {
			window.location.href =`/Community/Search?q=${searchText}`
        }
        // '검색' 클릭했을때
        if(e === "클릭") {
			window.location.href =`/Community/Search?q=${searchText}`
        }
    }

	return (
		<Router>
			<Navbar collapseOnSelect fixed="top" className="menu" id={pagetype}>
				<Container>
					<Navbar.Brand href="/" className="Navbar-logo">
						{" "}
						로고
					</Navbar.Brand>
					
					<NavDropdown title="커뮤니티" id={`communityDropdown`}>
						<NavDropdown.Item href="/community/daily">
							일상
						</NavDropdown.Item>
						<NavDropdown.Item href="/community/boast">
							자랑
						</NavDropdown.Item>
						<NavDropdown.Item href="/community/question">
							질문
						</NavDropdown.Item>
						<NavDropdown.Item href="/community/recommendation">
							제품 추천
						</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown title="랭킹" id={`rankingDropdown`}>
						<NavDropdown.Item href="/Ranking">
							주간 랭킹
						</NavDropdown.Item>
						<NavDropdown.Item href="/Ranking">
							월간 랭킹
						</NavDropdown.Item>
					</NavDropdown>

					<div className="user">
						<input className="searchBar" type='text'
						onChange={onChangeSearchText} onKeyDown={(e)=>search(e)}/>
						<button className="searchBtn"onClick={(e)=> search('클릭')}> <FiSearch/> </button>
						<Nav.Link
							className="user-logo"
							href={KAKAO_AUTH_URL}
						></Nav.Link>
					</div>
				</Container>
			</Navbar>

			<main className="main">
				{/* Switch has been replaced with Routes from v6 */}
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/community/posting" element={<Posting />} />
					<Route exact path="/Ranking" element={<Ranking />} />
					<Route exact path="/community/daily" element={<Daily />} />
					<Route exact path="/community/search" element={<Search />} />
					<Route path="/oauth/callback/kakao" element={<KakaoLogin />} />

					{/* <Route path="*" element={<NotFound />} /> */}
					{/* 지정하지 않은 주소로 들어올 때는 NotFound가 뜬다. */}
				</Routes>
			</main>
		</Router>
	);
}

export default App;

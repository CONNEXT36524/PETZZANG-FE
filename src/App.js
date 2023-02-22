import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Ranking from "./pages/ranking/Ranking";
import Posting from "./pages/Community/Posting/Posting";
import Posts from "./pages/Community/Posts/Posts";
import { useSelector } from "react-redux/";
import Daily from "./pages/Community/Board/Daily";
import Boast from "./pages/Community/Board/Boast";
import Question from "./pages/Community/Board/Question";
import Search from "./pages/Community/Board/Search";
import Recommendation from "./pages/Community/Board/Recommendation";
import KakaoLogin from "./pages/Login/KakaoLogin";
import History from "./pages/Mypage/History";
import Notification from "./pages/Mypage/Notification";
import Awards from "./pages/Mypage/Awards";
import Account from "./pages/Mypage/Account";
import { FiSearch, FiUser } from "react-icons/fi";
import logoImg from "./assets/logo192.png";
import Footer from "./components/footer/Footer";
import axios from "react"
import "bootstrap/dist/css/bootstrap.css"; //bootstrap css 적용

function App() {
	// 로그인
	const pagetype = useSelector((state) => state.Nav.pagetype);
	const imageUrl = useSelector(state => state.ImgUrl);

	const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
	const rest_api_key = process.env.REACT_APP_REST_API_KEY;
	const KAKAO_AUTH_URL = process.env.REACT_APP_KAKAO_AUTH_URL;
	const [islogin, setlogin] = useState(false);
	const [isChange, setChange] = useState(false);
	const [userName, setUserName] = useState("");

	// 검색
	const [searchText, setSearchText] = useState("");
	const onChangeSearchText = (e) => {
		setSearchText(e.target.value);
	};

	const search = (e) => {
		console.log(searchText);
		// enter키 눌렀을때
		if (e.key === "Enter") {
			window.location.href = `/community/search?q=${searchText}`;
		}
		// '검색' 클릭했을때
		if (e === "클릭") {
			window.location.href = `/community/search?q=${searchText}`;
		}
	};

	const loginBtn = (e) => {
		window.location.href = KAKAO_AUTH_URL;
	};

	const logoutBtn = (e) => {
		sessionStorage.removeItem('userImg')
		sessionStorage.removeItem('token')
		sessionStorage.removeItem('userName')
		sessionStorage.removeItem('userCode')
	}
	const userImg = window.sessionStorage.getItem("userImg");
	useEffect(() => {
		if (sessionStorage.getItem("userName")) {
			setlogin(true);
		}
		else setlogin(false);
	}, );
	


	console.log(userImg)


	console.log(islogin);
	console.log(userImg);
	return (
		<Router>
			<Navbar collapseOnSelect fixed="top" className="menu" id={pagetype}>
				<Container>
					<Navbar.Brand href="/" className="Navbar-logo">
						<img
							src={logoImg}
							width={"30"}
							height={"30"}
							className="d-inline-block align-top"
							alt="PETZZANG Logo"
						/>
						PETZZANG
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

					<div className="right">
						<div className="searchBarDiv">
							<input
								className="searchBar"
								type="text"
								onChange={onChangeSearchText}
								onKeyDown={(e) => search(e)}
							/>
							<button
								className="searchBtn"
								onClick={(e) => search("클릭")}
							>
								{" "} <FiSearch />{" "}
								
							</button>
						</div>
						
						<div className="userDiv">
							{
							islogin ? 
							<>
								<div className="user1">
									<img className="user-logo1" src={imageUrl}/>
								</div>
								<div className="user1Dropdown">

									<NavDropdown title="" id={`mypageDropdown`}>
										<NavDropdown.Item href="/mypage/account">
											마이페이지
										</NavDropdown.Item>
										<NavDropdown.Item onClick={logoutBtn} href="/">
											로그아웃
										</NavDropdown.Item>
									</NavDropdown>
								</div>
							</>
							:
								<button className="user2" onClick={(e) => loginBtn()} > 
									<FiUser/> 
								</button>
									
								
								// <img className="user-logo" src="./assets/user_icon.png"/>
								// <Nav.Link
								// 	className="user-logo2"
								// 	href={KAKAO_AUTH_URL}
								// ></Nav.Link>
							}
						</div>
					</div>
				</Container>
			</Navbar>

			<main className="main">
				{/* Switch has been replaced with Routes from v6 */}
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/community/posting" element={<Posting />} />
					<Route path="/community/posts" element={<Posts />} />
					<Route exact path="/Ranking" element={<Ranking />} />
					<Route exact path="/community/daily" element={<Daily />} />
					<Route exact path="/community/boast" element={<Boast />} />
					<Route
						exact
						path="/community/question"
						element={<Question />}
					/>
					<Route
						exact
						path="/community/recommendation"
						element={<Recommendation />}
					/>
					<Route exact path="/community/daily" element={<Daily />} />
					<Route
						exact
						path="/community/search"
						element={<Search />}
					/>
					{/* <Route exact path="/logout" element={<Logout />} /> */}
					<Route
						path="/oauth/callback/kakao"
						element={<KakaoLogin />}
					/>
					<Route
						path="/mypage/notification"
						element={<Notification />}
					/>
					<Route path="/mypage/history" element={<History />} />
					<Route path="/mypage/awards" element={<Awards />} />
					<Route path="/mypage/account" element={<Account />} />
					<Route
						path="/oauth/callback/kakao"
						element={<KakaoLogin />}
					/>

					{/* <Route path="*" element={<NotFound />} /> */}
					{/* 지정하지 않은 주소로 들어올 때는 NotFound가 뜬다. */}
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;

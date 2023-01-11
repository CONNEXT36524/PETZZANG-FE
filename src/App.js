import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Ranking from "./pages/ranking/Ranking";
import Posting from "./pages/Community/Posting/Posting";
import Daily from "./pages/Community/Board/Daily";
import Question from "./pages/Community/Board/Question";

import "bootstrap/dist/css/bootstrap.css"; //bootstrap css 적용

function App() {
	return (
		<Router>
			<Navbar collapseOnSelect fixed="top" className="menu">
				<Container>
					<Navbar.Brand href="/" className="Navbar-logo">
						{" "}
						사이트
					</Navbar.Brand>
					{/* <Nav.Link className = "item" href="/about">소개</Nav.Link> */}
					<div className="item1">
						<Nav.Link href="/">그거</Nav.Link>
					</div>
					<div className="item3">
						<Nav.Link href="/posting">포스팅</Nav.Link>
					</div>
					<div className="item2">
						<Nav.Link href="/">로그인</Nav.Link>
					</div>
				</Container>
			</Navbar>

			<main className="main">
				{/* Switch has been replaced with Routes from v6 */}
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/posting" element={<Posting />} />
					<Route exact path="/Ranking" element={<Ranking />} />
					<Route exact path="/Community/Daily" element={<Daily />} />
					<Route exact path="/Community/Question" element={<Question />} />
					{/* <Route path="*" element={<NotFound />} /> */}
					{/* 지정하지 않은 주소로 들어올 때는 NotFound가 뜬다. */}
				</Routes>
			</main>
		</Router>
	);
}

export default App;

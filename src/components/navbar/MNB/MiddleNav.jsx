import React from "react";
import "./MiddleNav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MiddleNav(props) {
	return (
		<Navbar id="middleNavigationBar">
			<Nav className="justify-content-center" activeKey="disabled">
				<Nav.Item>
					<Nav.Link href="/">HOME</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="">{">"}</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="disabled">커뮤니티</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>{">"}</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/community/daily" eventKey="link-2">
						일상
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>{">"}</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/community/posting" eventKey="disabled">
						게시글 작성
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	);
}

export default MiddleNav;

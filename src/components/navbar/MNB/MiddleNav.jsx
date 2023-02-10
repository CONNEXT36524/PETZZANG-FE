import React, { useState } from "react";
import "./MiddleNav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MiddleNav(props) {
	let contents = props.contents.split(">");

	let urlString = "";

	if (props.boardType == null) {
		console.log("boardType is null")
	}
	else {
		if (props.boardType=="daily") {
			contents[2] = "일상"
			urlString = "/community/daily";
		} else if (props.boardType=="boast") {
			contents[2] = "자랑"
			urlString = "/community/boast";
		} else if (props.boardType=="question") {
			contents[2] = "질문"
			urlString = "/community/question";
		} else if (props.boardType=="recommendation") {
			contents[2] = "제품 추천"
			urlString = "/community/recommendation";
		}
	}
	
	

	switch (contents[2]) {
		case "일상":
			urlString = "/community/daily";
			break;
		case "자랑":
			urlString = "/community/boast";
			break;
		case "질문":
			urlString = "/community/question";
			break;
		case "제품 추천":
			urlString = "/community/recommendation";
			break;
		case "검색":
			urlString = "/community/search";
			break;
	}

	if (contents.length == 4) {
		return (
			<Navbar id="middleNavigationBar">
				<Nav className="justify-content-center" activeKey="current">
					<Nav.Item>
						<Nav.Link href="/" eventKey={""}>
							{contents[0]}
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="">{">"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey={""} disabled={"true"}>
							{contents[1]}
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>{">"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href={urlString} eventKey={""}>
							{contents[2]}
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>{">"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							href="/community/posting"
							eventKey={"current"}
							disabled={"true"}
						>
							{contents[3]}
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		);
	} else {
		return (
			<Navbar id="middleNavigationBar">
				<Nav className="justify-content-center" activeKey="current">
					<Nav.Item>
						<Nav.Link href="/" eventKey={""}>
							{contents[0]}
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="">{">"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="" eventKey={""}>
							{contents[1]}
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>{">"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href={urlString} eventKey={""}>
							{contents[2]}
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		);
	}
}

export default MiddleNav;

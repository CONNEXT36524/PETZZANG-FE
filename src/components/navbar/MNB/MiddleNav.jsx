import React, { useState } from "react";
import "./MiddleNav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MiddleNav(props) {
	const contents = props.contents.split(">");

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
						<Nav.Link href="/community/daily" eventKey={""}>
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
						<Nav.Link eventKey={""} disabled={"true"}>
							{contents[1]}
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>{">"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/community/daily" eventKey={""}>
							{contents[2]}
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		);
	}
}

export default MiddleNav;

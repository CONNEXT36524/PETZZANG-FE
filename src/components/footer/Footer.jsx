import "./Footer.css";
import { Container } from "react-bootstrap";
function Footer(props) {
	return (
		<div id="footer" className="footer">
			<Container id="footerContainer">
				<div className="footerLeft">
					<h4 className="footerContainerTitle">PETZZANG</h4>
					<br />
					<p className="footerContainerContent">
						사랑스러운 반려동물을 자랑할 수 있는 공간,
						<br />
						반려동물을 키우며 궁금했던 점을 질문하는 공간,
						<br />
						펫짱 커뮤니티에서 활동해보세요
					</p>
				</div>
				<div className="footerRight">
					<h4 className="footerContainerTitle">Site Info</h4>
					<br />
					<p className="footerContainerContent">
						사랑스러운 반려동물을 자랑할 수 있는 공간,
						<br />
						반려동물을 키우며 궁금했던 점을 질문하는 공간,
						<br />
						펫짱 커뮤니티에서 활동해보세요
					</p>
				</div>
			</Container>
			<Container>
				<hr />
			</Container>
			<Container id="footerBottom">Copyright 2023 | PETZZANG</Container>
		</div>
	);
}

export default Footer;

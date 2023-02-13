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
						펫짱은 여러 반려동물들의 사랑스러운 모습을 공유하는 커뮤니티입니다. <br />
						반려동물에 대한 일상, 자랑, 질문 등으로 소통해보세요! <br />
						누구나 자신의 반려동물을 자유롭게 자랑할 수 있는 공간입니다.<br />
						당신의 반려동물이 랭킹에 올라 영광을 누릴 수 있도록 도전해보세요!
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
						펫짱 커뮤니티에서 활동해보세요!
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

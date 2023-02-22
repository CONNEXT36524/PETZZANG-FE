import "./BannerDetail.css";
import "./Banner.css";
import Container from "react-bootstrap/Container";
import bannerDogImage from "../../assets/dog.png";
import { useSelector } from "react-redux/";
import ImgCard from "../community/ImgCard";

function RankingBanner(props) {
	const img = useSelector((state) => state.Rank.firstimg);

	return (
		<div className="rankingBanner">
			<Container id="bannerContainer">
				<div className="rankingbanner_section">
					<div className="bannerContainerText">
						<h2 className="bannerContainerTitle">펫짱 랭킹</h2>
						<br />
						<p className="bannerContainerContent">
							사랑스러운 반려동물을 자랑할 수 있는 공간,
							<br />
							반려동물을 키우며 궁금했던 점을 질문하는 공간,
							<br />
							펫짱 커뮤니티에서 활동해보세요
						</p>
					</div>
				</div>
				{img===''? <></>:
				<div className="banner_circle">
					<ImgCard item={img}/>
				</div>
}
			</Container>
		</div>
	);
}

export default RankingBanner;

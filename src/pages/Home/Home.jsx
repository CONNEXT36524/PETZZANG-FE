import "./Home.css"
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import home_cat from "../../assets/home_cat.png"
import HomeRankImg from "../../components/ranking/homeRankImg"

const Home=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("home"))
    },[dispatch])
    return(
        <>
        <div className="first_section">
            <div className="first_section_ment">
                <p className="homeText1">세상에서 제일 귀여운 😍<br/>
                당신의 반려동물을 자랑해보세요!</p>
                <p className="homeText2">우리 강아지가 제일 귀여워요!<br/>
                우리집 고양이가 제일 예뻐요!<br/>
                매주 바뀌는 랭킹에 도전해보세요!</p>
                
            </div>
        </div> 
    {/* ###################################################### */}
        <div className="second_section">
            
            <br/><br/>
            <h3>
                🎉 PETZZANG RANKING (펫짱 랭킹) 🎉
            </h3><br/>
            <div className="HomeRankImgDiv">
                <HomeRankImg/>
            </div> <br/><br/><br/><br/><br/>
            <Link to="/Ranking">
                <Button variant="warning" size='lg'>
                    랭킹 더보기
                </Button>
            </Link>
        </div>
    {/* ###################################################### */}
        <div className="third_section">
            <div className="third_write">
                <p className="third_section_text">
                    일상, 자랑, 질문 등으로 <br></br>
                    커뮤니티 공간을 채워보세요!
                </p>
                <p className="third_detailwrite">
                    사랑스러운 반려동물을 자랑할 수 있는 공간, <br></br>
                    반려동물을 키우며 궁금했던 점을 질문하는 공간, <br></br>
                    펫짱 커뮤니티에서 활동해보세요!
                </p>
                <Link to="/Community/daily">
                    <Button variant="danger" size="lg">
                    게시판 둘러보기
                    </Button>
                </Link>
            </div>
            <div className="third_circle">
                <div className="third_image">
                <img src={home_cat} alt="home_cat"></img>
                </div>
            </div>
        </div> 
    {/* ###################################################### */}
        <div className="fourth_section">
            
        </div> 
        </>
        

    );

}
export default Home;
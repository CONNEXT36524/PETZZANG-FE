
import "./Ranking.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import RankingBanner from "../../components/banner/RankingBanner";

const Ranking=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("ranking"))
    },[dispatch])
    
    return(
        <>
            <RankingBanner/>

            <Navbar bg="light"  >
            <Container id="ranking_container">
                <Navbar.Brand href="/" id="ranking_address">
                    HOME
                </Navbar.Brand>
                {">"}
                <Navbar.Brand href="/Ranking" id="ranking_address">
                    랭킹
                </Navbar.Brand>
                {">"}
                <Navbar.Brand href="/Ranking" id="ranking_address">
                    주간랭킹
                </Navbar.Brand>
            
            </Container>
                <div>
                    이주의 반려동물
                </div>
            </Navbar>

            <div className="ranking_section">

            </div>
        </>
    );
}
export default Ranking;

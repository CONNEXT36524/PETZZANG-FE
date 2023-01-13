
import "./Ranking.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import RankingBanner from "../../components/banner/RankingBanner";
import Mainranking from "../../components/Mainrnaking";

const Ranking=()=>{
    const dispatch = useDispatch();
    const [Isbtn, setIsbtn]=useState(true);
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
                <div className="btn_section">
                    <Button variant={Isbtn ? "warning":"light"} id="ranking_btn"onClick={()=>setIsbtn(true)}>주간 랭킹</Button>
                    <Button variant={Isbtn ? "light":"warning"} id="ranking_btn" onClick={()=>setIsbtn(false)}>월간 랭킹</Button>
                </div>
                <Mainranking Isweekly={Isbtn} />

            </div>
        </>
    );
}
export default Ranking;

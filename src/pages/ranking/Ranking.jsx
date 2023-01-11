
import "./Ranking.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Ranking=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("ranking"))
    },[dispatch])
    
    return(
        <>
            <div className="ranking_first_section">
                hi
            </div>
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
        </>
    );
}
export default Ranking;

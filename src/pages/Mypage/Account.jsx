
import "./Mypage.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import MypageBanner from "../../components/banner/MypageBanner";
import Sidebar from "../../components/mypage/Sidebar";
import styled from "styled-components";

import { Toggle } from "../../components/mypage/Toggle"

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`

const Account=()=>{
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("mypage"))
    },[dispatch])
    
    return(
        <>
            <MypageBanner/>
            <Navbar bg="light"  >
            <Container id="mypage_container">
                <Navbar.Brand href="/" id="mypage_address">
                    HOME
                </Navbar.Brand>
                {">"}
                <Navbar.Brand href="/Ranking" id="ranking_address">
                    마이페이지
                </Navbar.Brand>
                {">"}
                <Navbar.Brand href="/Ranking" id="ranking_address">
                    알림
                </Navbar.Brand>
             </Container>
            </Navbar>
            <Center>
                <Sidebar/>
                <div>Account</div>
            </Center>
      
            
        </>
    );
}
export default Account;

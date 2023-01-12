
import "./Mypage.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import MypageBanner from "../../components/banner/MypageBanner";
import Sidebar from "../../components/mypage/Sidebar";
import Awards from "../../components/mypage/Awards";
import Note from "../../components/mypage/Note";
import Notification from "../../components/mypage/Notification";
import Account from "../../components/mypage/Account";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { Toggle } from "../../components/Toggle"

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`

const Mypage=()=>{
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
                </Center>
                <Routes>
                    <Route path="/mypage/notification" element={<Notification />} />
                    <Route path="/mypage/note" element={<Note />} />
                    <Route path="/mypage/awards" element={<Awards />} />
                    <Route path="/mypage/account" element={<Account />} />
                </Routes>
                
            
        </>
    );
}
export default Mypage;

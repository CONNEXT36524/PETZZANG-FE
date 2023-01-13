
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
import data from"./data.json"
import commnet from "../../assets/comment.png"
import { Toggle } from "../../components/mypage/Toggle"

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`
const Content = styled.div`
    position: relative;
    margin-top: 9rem;
    margin-left: 10rem;
    cursor: pointer;

`
const Title = styled.div`
    display: flex;
`
const Sub =styled.div`
    margin-top: 50px;
    left: 1px;
    width: 130vh;
    height: 60vh;
    background-color: rgb(234, 234, 234);
    border: 1px solid rgb(234, 234, 234);
    flex-direction: row;
`
const Detail = styled.div`
    
    width: 130vh;
    height: 10vh;
    background-color: rgb(255, 255, 254);
    border-bottom: 1px solid #e0e0e0;
    display: flex;
`   




const Notification=()=>{
    
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
                <Content>
                  <Title>
                        <div className="title">알림</div>
                        <Toggle/>
                  </Title>
                  <Sub>
            
                        {data.noti.map((noti) => (
                            <Detail>
                       
                             <img src={commnet}/>
                          
                            <div className="cont">
                            <p> {noti.title} </p>
                            <p>{noti.sub}</p>
                            </div>
                            </Detail>
                        ))
                        }
                  </Sub>
                  
                </Content>
            </Center>
      
            
        </>
    );
}
export default Notification;

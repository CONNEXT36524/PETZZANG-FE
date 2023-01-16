
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
import { useState } from "react" 

import { Toggle } from "../../components/mypage/Toggle"

const Center = styled.div`
 
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
    margin-top: 1rem;
    flex-direction: row;
    margin-bottom : 15px;
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

const History=()=>{
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("mypage"))
    },[dispatch])

    const data =['전체', '일상', '자랑', '질문', '제품추천'];
    
    //내가 작성한 글 버튼 
    let [btnActive, setBtnActive] = useState("");
    const toggleActive = (e) => {
        setBtnActive((prev) => {
          return e.target.value;
        });
      };

    //내가 작성한 댓글 버튼
    let [btnActive1, setBtnActive1] = useState("");
    const toggleActive1 = (e) => {
        setBtnActive1((prev) => {
          return e.target.value;
        });
      };
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
                        <div className="title">내가 작성한 글 보기</div> 
                        <div>
                        {data.map((elm, index) => {   
                            return ( 
                                <button className={(index == btnActive ? "typeBtnActive" : "typeBtn")}
                                    value={index}
                                    onClick={toggleActive}
                                >
                                    {elm}
                                </button>
                                );
                        })}
                        </div>
                  </Title>
                  <Sub>      
             
                  </Sub>
                  
                  <Title>
                        <div className="title">내가 작성한 댓글 보기</div>
                        <div>
                        {data.map((elm, index) => {   
                            return ( 
                                <button className={(index == btnActive1 ? "typeBtnActive" : "typeBtn")}
                                    value={index}
                                    onClick={toggleActive1}
                                >
                                    {elm}
                                </button>                             
                                );
                        })}
                        </div>
                  </Title>
                  <Sub>            
      
                  </Sub>
                </Content>
            </Center>
      
            
        </>
    );
}
export default History;

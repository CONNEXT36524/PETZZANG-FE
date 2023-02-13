
import "./Mypage.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MiddleNav from "../../components/navbar/MNB/MiddleNav";
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
    margin-top: 5rem;
    margin-left: 8rem;
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
            <MiddleNav contents="HOME>마이페이지>알림" />
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
            <br/><br/><br/>
            
        </>
    );
}
export default Notification;

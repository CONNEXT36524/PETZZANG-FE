
import "./Mypage.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MiddleNav from "../../components/navbar/MNB/MiddleNav";
import MypageBanner from "../../components/banner/MypageBanner";
import Sidebar from "../../components/mypage/Sidebar";
import styled from "styled-components";


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


const Awards=()=>{
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("mypage"))
    },[dispatch])
    
    return(
        <>
            <MypageBanner/>
            <MiddleNav contents="HOME>마이페이지>펫짱 수상기록" />
            <Center>
                <Sidebar/>
                <Content>
                  <Title>
                        <span role="img" aria-label="writing hand">✍</span>
                        <div className="title">펫짱 수상기록</div>
                  </Title>
                  <Sub>
            
                        
                  </Sub>
                  
                </Content>
            </Center>
      
            
        </>
    );
}
export default Awards;

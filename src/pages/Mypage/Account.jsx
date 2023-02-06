
import "./Mypage.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import { useState, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import MypageBanner from "../../components/banner/MypageBanner";
import Sidebar from "../../components/mypage/Sidebar";
import styled from "styled-components";
import myImage from "../../assets/default_profile.png";
import DeleteAccountModal from "../../components/modal/DeleteAccountModal";
import axios from "axios";

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
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(234, 234, 234);
    display : flex;
`

//실제 이미지는 Storage에 저장하고, 주소를 활용해 처리한다!
// storage는 파일 영상등 저장하는 db 
// 1. input 태그를 통해 파일 선택 후 파일 객체 들어온 걸 백엔드에 이미지 업로드 요청 
// 2. storage에서는 파일을 저장 그 파일을 다운받을 수 있는 주소를 줌 
// 3. 백엔드가 그 주소를 받아서 다시 프론트로 전달 

const Account=()=>{
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("mypage"))
    },[dispatch])


	const [modalShow, setModalShow] = useState(false);
    const [userImg, setUserImg] = useState(myImage)
    const [uploadImg, setUploadImg] = useState(null)
    const profileInputRef = useRef();
    
    const token = sessionStorage.getItem("token")
    // const encodeFileToBase64 = (image: File) => {
    //     return new Promise((resolve, reject) => {
    //       const reader = new FileReader();
    //       reader.readAsDataURL(image);
    //       reader.onload = (event: any) => resolve(event.target.result);
    //       reader.onerror = (error) => reject(error);
    //     });
    //   };

    const uploadImageBtnClick = (event) =>{
        event.preventDefault();
        (async () => {
            try {
                const file = profileInputRef.current.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                console.log(userImg)
                const formdata = new FormData();
                formdata.append('uploadImg', uploadImg)

                const res = await axios(
                    {
                        method: 'put',
                        url: '/api/profile',
                        data: userImg,
                        headers: {
                            Authorization: token,
                        },
                      }
                    )
                    // response from backend server
                    .then((response) => {
                        console.log("ok response", response);
                        // const token = response.headers.authorization;
    
                    }).catch(function(e){
                        console.log(e)
                      });
            } catch (e) {
                // response fail error message
                console.log(e);
            }
        })();
    };

    const uploadImageChange = async (e) =>{
        const file = profileInputRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        setUserImg(reader.result);
        setUploadImg(profileInputRef.current.files[0])
    }
    }

    useEffect (()=>{
      if (sessionStorage.getItem("userImg"))
      setUserImg(sessionStorage.getItem("userImg")) 
    }, [])

    // 중복확인 
    const duplicateCheck = () => {

    }

    // 회원탈퇴
    const deleteAccount = () => {
    }
    

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
                        <div className="title">나의 계정</div>
                  </Title>
                    <Sub>
                    <div className = "circle" 
                    onClick={()=>{profileInputRef.current.click()}}>
                    <img className="profile" src={userImg ? userImg : {myImage}}/>
                    <input style={{ display: "none" }} type="file" accept="image/*" className="profileInput" ref={profileInputRef} onChange={uploadImageChange} />
                    </div>
                    <div className="modify">
                        <div>프로필 사진 변경</div>
                        <div className="nickname">
                            <div>닉네임</div>
                            <input type="text" />
                            <button className="duplicateBtn" onClick={duplicateCheck}> 중복확인 </button>
                        </div>
                        <button onClick={() => setModalShow(true)}>회원탈퇴</button>
                        <DeleteAccountModal 
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />
                        <button className="saveBtn" onClick={uploadImageBtnClick}>변경사항 저장</button>
                    </div>
                  </Sub>
                  
                </Content>
            </Center>
            
        </>
    );
}

export default Account;

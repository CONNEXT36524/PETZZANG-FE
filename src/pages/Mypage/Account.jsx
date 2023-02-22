
import "./Mypage.css"
import { useDispatch} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import { useState, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import MiddleNav from "../../components/navbar/MNB/MiddleNav";
import MypageBanner from "../../components/banner/MypageBanner";
import Sidebar from "../../components/mypage/Sidebar";
import styled from "styled-components";
import myImage from "../../assets/default_profile.png";
import DeleteAccountModal from "../../components/modal/DeleteAccountModal";
import axios from "axios";
import UserService from "../../service/UserService";
import CheckNicknameModal from "../../components/modal/CheckNicknameModal";

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
const Sub = styled.div`
    font-family: "Gmarket-Medium";
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


    const [delModalShow, setDelModalShow] = useState(false);
    const [cheModalShow, setCheModalShow] = useState(false);
    const [userImg, setUserImg] = useState("")
    const [uploadImg, setUploadImg] = useState("") //axios로 보낼 데이터
    const [imgName, setImgName] = useState("") //axios로 보낼 데이터
    const profileInputRef = useRef();
    const formData = new FormData();
    const userName = sessionStorage.getItem("userName")
    const token = sessionStorage.getItem("token")
    const [nameCheck, setNameCheck] = useState(false)
    const [nameChg, setNameChg] = useState(userName)
    const [modalMsg, setModalMsg] = useState("")
    const [imgChg, setImgChg] = useState(false)
    const [imgApiUrl, setImgUrl] = useState("")


    useEffect (()=>{
        if (sessionStorage.getItem("userImg"))
        setUserImg()   
        //유저 정보 가져오기
        axios.get('/api/get/user', {
            params:{
                nickName : nameChg
            }
        }).then((respond)=>{
            console.log(respond.data)
            setImgUrl(respond.data.kakaoprofileimg)
        }).catch(error => console.log(error))

    }, [])

    // 유저 이미지 가져오기
    console.log(imgApiUrl)
    axios.get('/api/community/get/img', {
        params:{
            imgUrl : imgApiUrl
        }
    }).then((respond)=>{
        console.log(respond.data)
        //console.log(respond.data.body)
        setUserImg("data:image/png;base64,"+respond.data.body)
    }).catch(error => console.log(error))

    
    // 이미지 변경 함수
    const uploadImageChange = (e) => {
        setImgChg(true)
        const file = profileInputRef.current.files[0];
        setImgName(file.name);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setUserImg(reader.result);
            console.log(reader.result);
            setUploadImg(reader.result);
        }
    }

    formData.append('imgName', imgName);
    formData.append('uploadImg', uploadImg);

    //변경사항 저장 버튼 누르면 실행
    //axios로 이미지 데이터 보내기
	const updateProfileBtnClick = () => {
        setCheModalShow(true)
        setModalMsg("변경을 완료했습니다!😊")
        //닉네임+사진 변경
        if (nameCheck && imgChg)
        {
        console.log("닉네임 사진 변경")
        formData.append('nameChg', nameChg);
		UserService.updateProfile(formData, token)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				// 오류발생시 실행
			})
			.then(function () {
				// 항상 실행
			});
        }
        //사진만 변경
        else if (!nameCheck && nameChg === userName )
        {
            UserService.updateImg(formData, token)
			.then(function (response) {
				console.log(response);
                window.sessionStorage.setItem("userName", userName);
                window.sessionStorage.setItem("userImg", "data:image/png;base64,"+response.data.uploadImg);
			})
			.catch(function (error) {
				// 오류발생시 실행
			})
			.then(function () {
				// 항상 실행
			});
        }
        //닉네임만 변경
        else if (nameCheck)
        {
            console.log("닉네임변경")
             try{
                 axios.get("/api/updateNickname", {
                 params : {name : nameChg},    
                    headers: {
                        Authorization: token,
                    },
                })
                .then((res)=>{
                    console.log(res)
                    const result = res.data
                    setModalMsg("변경을 완료했습니다!😊")
                })}catch (err) {
                    console.log(err)
                }
                };
            
        }
    
    // 닉네임 
    const checkNameChange = (e) =>{

        setNameChg(e.target.value)
        setNameCheck(false)
        console.log(nameChg)
    }

    //닉네임 유효성 검사 영어, 한글, 숫자 
    const validateNickname = (nickname) => {
        return nickname
          .toLowerCase()
          .match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{2,10}$/)
      }

    // 중복확인 
    const duplicateCheck = () => {
        setCheModalShow(true)

        if (!validateNickname(nameChg))
        {
            setModalMsg("3글자 이상 10글자 미만으로 입력해주세요")
        }
        else {
            try{
            axios.get("/api/duplicationcheck", 
            {
                params:{   
                    name : nameChg
                }, 
                headers: {
                    Authorization: token,
                },
            })
            .then((res)=>{
                console.log(res)
                const result = res.data
                if (!result) {
                    setModalMsg("사용 가능한 닉네임입니다.😊")
                    setNameCheck(true)
                }
                else{
                    setModalMsg("이미 등록된 닉네임입니다. 다시 입력해주세요")
                }
            })}catch (err) {
                console.log(err)
            }
            };
    }

    // 회원탈퇴
    const deleteAccount = () => {
    }
    

    return(
        <>
            <MypageBanner/>
            <MiddleNav contents="HOME>마이페이지>정보 수정" />
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
                            <br/><br/><br/>
                            
                            <div className="nickname">
                                <h3>닉네임:</h3>
                                <input className="nicknameInputTag" value={nameChg} type="text" placeholder={userName} onChange={checkNameChange} />
                                <button className="duplicateBtn" onClick={duplicateCheck}> 중복 확인 </button>
                                <CheckNicknameModal 
                                    show={cheModalShow}
                                    msg = {modalMsg}
                                    onHide={() => setCheModalShow(false)
                                    }
                                />
                            </div> 

                            <div className="saveNdeleteBtn">
                                <button className="saveBtn" onClick={updateProfileBtnClick}>변경사항 저장</button>
                                 <CheckNicknameModal 
                                    show={cheModalShow}
                                    msg = {modalMsg}
                                    onHide={() => setCheModalShow(false)
                                    }
                                    />
                                <button className="deleteBtn" onClick={() => setDelModalShow(true)}>회원 탈퇴</button>
                                <DeleteAccountModal 
                                    show={delModalShow}
                                    onHide={() => setDelModalShow(false)}
                                />
                            </div>
                        </div>
                    </Sub>
                </Content>
            </Center>
            <br/><br/><br/>
        </>
    );
}

export default Account;
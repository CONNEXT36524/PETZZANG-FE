
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
import { string } from "yargs";

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

    //데이터 가져오기
	const [getImg, setGetImg] = useState();
	useEffect(() => {
        let completed = false; 
		async function get() {
			await axios.get('/api/get/profile', {
				params:{
					imgName : "thumbnail"
					
				}
			}).then((respond)=>{
				console.log(respond.data)
				//setGetImg(respondList.data)
			}).catch(error => console.log(error))
		}
		get()
		return () => {
			completed = true;
		};
	}, []);
	//console.log(getImg)
    

    //axios로 input 데이터 보내기
	// async function uploadImageBtnClick() {

    //     const file = profileInputRef.current.files[0];
    //     const reader = new FileReader();
    //     let apiImgString = ""
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         apiImgString = reader.result.split(",")[1];
    //     }


    //     const formData = new FormData();
    //     formData.append('profileImage', apiImgString);

	// 	UserService.updateProfile(token, formData)
	// 		.then(function (response) {
	// 			console.log(response.data);
	// 			// response
	// 			//useState 업데이트 완료 상태로 바꿔주는 코드 작성하기!
	// 			//setUploadedState("업로드가 안료되었습니다.");
	// 		})
	// 		.catch(function (error) {
	// 			// 오류발생시 실행
	// 			// setUploadedState(
	// 			// 	"업로드 중 오류가 발생했습니다.\n다시 시도해주세요."
	// 			// );
	// 		})
	// 		.then(function () {
	// 			// 항상 실행
	// 		});
	// }

    const uploadImageBtnClick = (event) =>{
        event.preventDefault();
        (async () => {
            try {
                const file = profileInputRef.current.files[0];

                const reader = new FileReader();
                let apiImgString = ""
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    apiImgString = reader.result.split(",")[1];
                }
                
                const formdata = new FormData();
                formdata.append('uploadImg', apiImgString);


                const res = await axios(
                    {
                        method: 'post',
                        url: '/api/upload/profile',

                        data: formdata,
                        headers: {
                            Authorization: token,
                            'Content-Type': 'image/png'
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


    let objectUrl="";

    // 이미지 변경 함수
    const uploadImageChange = (e) => {
        const file = profileInputRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setUserImg(reader.result);
            console.log(reader.result);
            setUploadImg(profileInputRef.current.files[0])
            console.log(profileInputRef.current.files[0])
            //console.log(JSON.stringify(profileInputRef.current.files[0]))
        
            //set preview image
            objectUrl = URL.createObjectURL(e.target.files[0])
            console.log(objectUrl)
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
                                <input className="nicknameInputTag" type="text" />
                                <button className="duplicateBtn" onClick={duplicateCheck}> 중복 확인 </button>
                            </div> 

                            <div className="saveNdeleteBtn">
                                <button className="saveBtn" onClick={uploadImageBtnClick}>변경사항 저장</button>
                                <button className="deleteBtn" onClick={() => setModalShow(true)}>회원 탈퇴</button>
                                <DeleteAccountModal 
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
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
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import "bootstrap/dist/css/bootstrap.min.css";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Container from "react-bootstrap/Container";
import NoContent from "./NoContent";
import Offcanvas from "../../../components/community/OffCanvas.js";
import Imgdiv from "../../../components/community/Imgdiv.js";
import TypeBtn from "../../../components/community/TypeBtn.js";
import Paging from "../../../components/community/Paging.js";
import WriteButton from "../../../components/button/WriteButton";
import { rpaging } from "../../../Slice/PagingSlice";
import "./Daily.css";
import axios from "axios";

function CallImgCard(props) {
	//console.log(props)
	var arr = [];

	for(let divNum=0; divNum<props.propsData.length; divNum=divNum+4) {
		// console.log(props.propsData.slice(divNum,(divNum+4)))
		arr.push (
			<div className='ImgCardDiv' key={divNum}> 
				<Imgdiv data={props.propsData.slice(divNum,(divNum+4))}/> 
			</div>
		)
	}
	return arr;
}

function Boast() {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("community"));
		dispatch(rpaging(setPage));
    },[dispatch])

    const [typeValue, setTypeValue] = useState([]); //OffCanvas에서 boast로 데이터가져오기
	//console.log(typeValue);
	const [sexValue, setSexValue] = useState([]); //OffCanvas에서 boast로 데이터가져오기
	//console.log(sexValue);
	const [typeBtn, setTypeBtn] = useState([]); //TypeBtn에서 boast로 데이터가져오기
	//console.log(typeBtn)

	
    //데이터 가져오기
	const [bList, setbList] = useState([]);
	useEffect(() => {
		let completed = false; 
		async function get() {
			await axios.get('/api/community/board/boast', {
				params:{
					typeValue : typeValue.join(","),
					typeBtn : typeBtn.join(","),
					sexValue : sexValue.join(","),
				}
			}).then((respondList)=>{
				//console.log(respondList.data)
				setbList(respondList.data)
			}).catch(error => console.log(error))
		}
		get()
		return () => {
			completed = true;
		};
	}, [typeValue, typeBtn, sexValue]);
	console.log(bList)


    const currentPage = useSelector(state => state.PagingR.page);
    const cntPerPage = useSelector(state => state.PagingR.cntPerPage);
    const total = useSelector(state => state.PagingR.total);
    const range = useSelector(state => state.PagingR.range);

    const setPage = {
        cntPerPage : 10, 
        total : 40, 
        range : 5 
    }

	// 백엔드에서 게시글 list 받아와서 questionData 대신 sliceList를 map에 사용	 
	// const sliceList = () =>{ 
    //     setPage.total = bList.length
    //     dispatch(rpaging(setPage))
    //     return bList.slice(cntPerPage*(currentPage-1), cntPerPage*currentPage);
    // } 
	// console.log(bList.length)
	
    return (
        <>
        <CommunityBanner />
        <MiddleNav contents={"HOME>커뮤니티>자랑"} />
		<Container>
            <div className="boastMain">
                <h2 className="boardName">👏 자랑 게시판</h2> <br/>

                {
					bList.length === 0
					? 
					<>
						<Offcanvas setTypeValue={setTypeValue} setSexValue={setSexValue}/>
						<TypeBtn data={typeValue} setTypeBtn={setTypeBtn}/>
						<NoContent/>
					</>
					: 
					<>
						<Offcanvas setTypeValue={setTypeValue} setSexValue={setSexValue}/>
						<TypeBtn data={typeValue} setTypeBtn={setTypeBtn}/>
						<CallImgCard propsData={bList} typeValue={typeValue} typeBtn={typeBtn}/>
						<br/> <br/>

						<div className="writeBtnDiv">
							<Paging />
							<WriteButton content="HOME>커뮤니티>자랑>게시글 작성" />
						</div>
					</>
				}

				<br/><br/>
            </div>
        </Container>
        </>
    );
}

export default Boast;
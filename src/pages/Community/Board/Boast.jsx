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
        dispatch(changepagetype("community"))
    },[dispatch])

    const [typeValue, setTypeValue] = useState(""); //OffCanvas에서 boast로 데이터가져오기
	console.log(typeValue);

    //데이터 가져오기
	const [bList, setbList] = useState([]);
	useEffect(() => {
		axios.get('/api/community/board/boast')
		.then((respondList)=>{
			//console.log(respondList.data)
			setbList(respondList.data)
		})
		.catch(error => console.log(error))
	}, []);


    const currentPage = useSelector(state => state.PagingR.page);
    const cntPerPage = useSelector(state => state.PagingR.cntPerPage);
    const total = useSelector(state => state.PagingR.total);
    const range = useSelector(state => state.PagingR.range);

    const setPage = {
        cntPerPage : 10, 
        total : 40, 
        range : 5 
    }

    return (
        <>
        <CommunityBanner />
        <MiddleNav contents={"HOME>커뮤니티>자랑"} />
		<Container>
            <div className="boastMain">
                <h2 className="boardName">자랑 게시판</h2> <br/>

                {
					bList.length === 0
					? <NoContent/>
					: 
					<>
						<Offcanvas setTypeValue={setTypeValue} />
						<TypeBtn data={typeValue} />
						<CallImgCard propsData={bList}/>
						<br/> <br/>

						<div className="writeBtnDiv">
							<Paging />
							<WriteButton content="HOME>커뮤니티>자랑>게시글 작성" />
						</div>
					</>
				}
            </div>
        </Container>
        </>
    );
}

export default Boast;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import './Daily.css';
import Offcanvas from "./OffCanvas.js";
import ImgCard from "./ImgCard.js";
import TypeBtn from "./TypeBtn.js";
import Paging from "./Paging.js";

function Daily() {
  
  const [typeValue, setTypeValue] = useState(""); //OffCanvas에서 Daily로 데이터가져오기
  
  console.log(typeValue)
  
  return (
    <>

    <div className="banner">
		  <h2> 펫짱 커뮤니티 </h2>
	  </div>

    <Navbar bg="light">
      <Container id="middleNavigationBar">
          <Navbar.Brand>
          HOME {">"} 커뮤니티 {">"} 일상
        </Navbar.Brand>
      </Container>
    </Navbar>

    <Container>
      <div className='dailyMain'> 
        <Offcanvas setTypeValue={setTypeValue} />
        <h2 className='boardName'>일상 게시판</h2> <br/><br/>
        <TypeBtn data={typeValue}/>
        <ImgCard/> 
        <br/><br/>
        {/* <Stack spacing={2}>
          <Pagination count={10} />
        </Stack> */}
        <div className='writeBtnDiv'>
          <Paging/>
          <button className='writeBtn'> ✏️ 글쓰기 </button>
        </div>
      </div>
    </Container>
      
    </>
            
  )
};

export default Daily;
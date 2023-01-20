import "../../pages/ranking/Ranking.css"
import crown from "../../assets/crown.png"
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Rankingimg from "./Rankingimg";

function Mainranking(props) {
    const now=new Date();
    const [startday,setstartday]=useState(new Date(now.setDate(now.getDate()-now.getDay())));
    const newday=new Date(startday);
    const endday=new Date(newday.setDate(startday.getDate()+6));
    const startyear=startday.getFullYear();
    const startMonth=startday.getMonth()+1;
    const startDate=startday.getDate();
    const endyear=endday.getFullYear();
    const endMonth=endday.getMonth()+1;
    const endDate=endday.getDate();
    const [Isbtn, setIsbtn]=useState(true);

    // axios 써야함
    const data = [
		{id:0, img: '../../img/dog1.png', content: '내용1'},
		{id:1, img: '../../img/dog2.png', content: '내용2'},
		{id:2, img: '../../img/dog1.png', content: '내용3'},
		{id:3, img: '../../img/dog2.png', content: '내용4'},
		{id:4, img: '../../img/dog1.png', content: '내용5'},
		{id:5, img: '../../img/dog2.png', content: '내용6'},
	]
    
	return (
        <>
        <div className="btn_section">
                    <Button variant={Isbtn ? "warning":"light"} id="ranking_btn"onClick={()=>setIsbtn(true)}>주간 랭킹</Button>
                    <Button variant={Isbtn ? "light":"warning"} id="ranking_btn" onClick={()=>setIsbtn(false)}>월간 랭킹</Button>
                </div>
		<div className="Mainranking_section">
            <div className="img_section">
                <img src={crown} alt="crown"></img>
            </div>
            <div className="date_section">
            <Button id="date_leftbtn" size="sm" onClick={()=>Isbtn? setstartday(new Date(startday.setDate(startday.getDate()-7))): setstartday(new Date(startday.setMonth(startday.getMonth()-1)))}>{"<"}</Button>
            <p className="date_font">{Isbtn? "주간 랭킹": "월간 랭킹"}</p>
            <Button id="date_rightbtn" size="sm" onClick={()=>Isbtn? setstartday(new Date(startday.setDate(startday.getDate()+7))): setstartday(new Date(startday.setMonth(startday.getMonth()+1)))}>{">"}</Button>
            </div>
            <div className="date_section">
                {Isbtn? <p className="date_font">{startyear}년{startMonth}월 {startDate}일 ~ {endyear}년{endMonth}월 {endDate}일</p>: <p className="date_font">{startyear}년{startMonth}월</p>}
            </div>
        </div>
        {/* map 으로 순위 8개 component들 불러오기  */}
        <Rankingimg data={data}/>
        </>
	);
}

export default Mainranking;

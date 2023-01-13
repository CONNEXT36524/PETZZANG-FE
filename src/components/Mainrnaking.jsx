import "../pages/ranking/Ranking.css"
import crown from "../assets/crown.png"
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Mainranking(props) {
    const now=new Date();
    const [startday,setstartday]=useState(new Date(now.setDate(now.getDate()-now.getDay())));
    const newday=new Date(startday);
    const endday=new Date(newday.setDate(startday.getDate()+7));
    const startyear=startday.getFullYear();
    const startMonth=startday.getMonth()+1;
    const startDate=startday.getDate();
    const endyear=endday.getFullYear();
    const endMonth=endday.getMonth()+1;
    const endDate=endday.getDate();
    
	return (
		<div className="Mainranking_section">
            <div className="img_section">
                <img src={crown}></img>
            </div>
            <div className="date_section">
            <Button id="date_leftbtn" size="sm" onClick={()=>props.Isweekly? setstartday(new Date(startday.setDate(startday.getDate()-7))): setstartday(new Date(startday.setMonth(startday.getMonth()-1)))}>{"<"}</Button>
            <p className="date_font">{props.Isweekly? "주간 랭킹": "월간 랭킹"}</p>
            <Button id="date_rightbtn" size="sm" onClick={()=>props.Isweekly? setstartday(new Date(startday.setDate(startday.getDate()+7))): setstartday(new Date(startday.setMonth(startday.getMonth()+1)))}>{">"}</Button>
            </div>
            <div className="date_section">
                {props.Isweekly? <p className="date_font">{startyear}년{startMonth}월 {startDate}일 ~ {endyear}년{endMonth}월 {endDate}일</p>: <p className="date_font">{startyear}년{startMonth}월</p>}
            </div>
        </div>
	);
}

export default Mainranking;

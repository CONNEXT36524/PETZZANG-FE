import "../../pages/ranking/Ranking.css"
import crown from "../../assets/crown.png"
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Rankingimg from "./Rankingimg";
import axios from "axios";

function Mainranking(props) {
    const now=new Date();
    const day=new Date()
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
    const [type,settype]=useState("week");
    const [data,setdata]=useState([]);

    const loadranking =()=>{
        console.log(startyear.toString()+String(startMonth).padStart(2,'0')+String(startDate).padStart(2,'0'))
        axios.get("/api/ranking/load",{params:{date:startyear.toString()+String(startMonth).padStart(2,'0')+String(startDate).padStart(2,'0'), type:type}
    })
        .then((response)=> {
            console.log(response.data);
            setdata(response.data)
            console.log(data);
        }).catch(function (error) {
        console.log(error)
            // 오류발생시 실행
        });
    }

    const next=()=>{
        Isbtn? setstartday(new Date(startday.setDate(startday.getDate()+7))): setstartday(new Date(startday.setMonth(startday.getMonth()+1)))
    }

    const past=()=>{
        Isbtn? setstartday(new Date(startday.setDate(startday.getDate()-7))): setstartday(new Date(startday.setMonth(startday.getMonth()-1)))
    }
    const setweek=()=>{
        setIsbtn(true); 
        settype("week"); 
        setstartday(new Date(day.setDate(day.getDate()-day.getDay())));
    }
    const setmonth=()=>{
        setIsbtn(false); 
        settype("month"); 
        setstartday(new Date(day.setDate(day.getDate()-day.getDay())));
    }

    // axios 써야함
    useEffect(()=>{
        loadranking()
    }, [startday,type])
    
	return (
        <>
            <div className="btn_section">
                <Button variant={Isbtn ? "warning":"light"} id="ranking_btn" onClick={()=>{setweek()}}>주간 랭킹</Button>
                <Button variant={Isbtn ? "light":"warning"} id="ranking_btn" onClick={()=>{setmonth()}}>월간 랭킹</Button>
            </div>
            <div className="Mainranking_section">
                <div className="img_section">
                    <img src={crown} alt="crown"></img>
                </div>
                <div className="date_section1">
                    <Button id="date_leftbtn" size="sm" onClick={()=>{past()}}>{"<"}</Button>
                    <p className="date_font1">{Isbtn? "주간 랭킹": "월간 랭킹"}</p>
                    <Button id="date_rightbtn" size="sm" onClick={()=>{next()}}>{">"}</Button>
                </div><br/><br/>
                <div className="date_section2">
                    {Isbtn? <p className="date_font2">{startyear}년 {startMonth}월 {startDate}일 ~ {endyear}년 {endMonth}월 {endDate}일</p>: <p className="date_font">{startyear}년{startMonth}월</p>}
                </div>
            </div>
            {/* map 으로 순위 8개 component들 불러오기  */}
            <Rankingimg data={data}/>

            <br/><br/><br/>
        </>
	);
}

export default Mainranking;

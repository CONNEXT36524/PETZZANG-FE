import ImgCard from "../community/ImgCard"
import "../../pages/ranking/Ranking.css"
import  first from "../../assets/first.png"
import  second from "../../assets/second.png"
import  third from "../../assets/third.png"
import  otherranking from "../../assets/otherranking.png"

function Rankingimg(props) {
	//console.log(props)
    // console.log(props.data)
    return(
        <>
        <div className="rankingpost_section">
            <img src={first} alt="1" />

        </div>
    <div className="rankingpost_section">
            <ImgCard item={props.data[0]}/>
    </div>
    <div className="rankingpost_section">
            <img src={second} alt="2" className="rankingimg" />
            <img src={third} alt="3"className="rankingimg" />

        </div>
    <div className="rankingpost_section">
            <ImgCard item={props.data[1]}/>
            <ImgCard item={props.data[2]}/>
    </div>
    <div className="rankingpost_section">
           <p className="otherrank">4</p>
           <p className="otherrank">5</p>
           <p className="otherrank">6</p>
    </div>
    <div className="rankingpost_section">
            <ImgCard item={props.data[3]}/>
            <ImgCard item={props.data[4]}/>
            <ImgCard item={props.data[5]}/>
    </div>
    </>
    );
        

	
}
export default Rankingimg;
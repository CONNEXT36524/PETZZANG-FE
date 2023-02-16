import ImgCard from "../community/ImgCard"
import "../../pages/ranking/Ranking.css"
import  first from "../../assets/first.png"
import  second from "../../assets/second.png"
import  third from "../../assets/third.png"

function Rankingimg(props) {
	//console.log(props)
    // console.log(props.data)
    return(
        <>
            <div className="rankingpost_section">
                <img src={first} alt="1" />

            </div>
            <div className="rankingpost_section">
                    <ImgCard item={props.data.first_post_id}/>
            </div>
            <div className="rankingpost_section">
                <img src={second} alt="2" className="rankingimg" />
                <img src={third} alt="3"className="rankingimg" />
            </div>
            <div className="rankingpost_section">
                <ImgCard item={props.data.second_post_id}/>
                <ImgCard item={props.data.third_post_id}/>
            </div><br/>
            <div className="rankingpost_section">
                <h3 className="otherrank">4</h3>
                <h3 className="otherrank">5</h3>
                <h3 className="otherrank">6</h3>
            </div>
            <div className="rankingpost_section">
                <ImgCard item={props.data.fourth_post_id}/>
                <ImgCard item={props.data.fifth_post_id}/>
                <ImgCard item={props.data.sixth_post_id}/>
            </div>
        </>
    );
        

	
}
export default Rankingimg;
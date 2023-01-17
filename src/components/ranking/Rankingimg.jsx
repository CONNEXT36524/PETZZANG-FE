import ImgCard from "../community/ImgCard"
import "../../pages/ranking/Ranking.css"

function Rankingimg(props) {
	//console.log(props)
    // console.log(props.data)
    return(
        <>
    <div className="rankingpost_section">
            <ImgCard item={props.data[0]}/>
    </div>
    <div className="rankingpost_section">
            <ImgCard item={props.data[1]}/>
            <ImgCard item={props.data[2]}/>
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
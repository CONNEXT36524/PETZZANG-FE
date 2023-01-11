import "./Home.css"
import {Link} from "react-router-dom";


const Home=()=>{
    return(
        <>
        <div className="first_section">
            <div className="first_section_ment">
                반갑습니다~
            </div>
        </div> 

        <div className="second_section">
            <Link to="/Ranking">
                <button className="rankingbtn">
                    랭킹보러가기
                </button>
            </Link>
        </div>
        <div className="third_section">
        </div> 
        <div className="fourth_section">
        </div> 
        </>
        

    );

}
export default Home;
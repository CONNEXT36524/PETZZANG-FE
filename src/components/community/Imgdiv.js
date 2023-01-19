import ImgCard from "./ImgCard"

function Imgdiv(props) {
	//console.log(props)
    // console.log(props.data)
    return(
    <>
    {props.data.map((item,idx)=>(
        <div key={idx}>
            <ImgCard item={item}/>
        </div>
        
    ))}
    </>
    );
        

	
}
export default Imgdiv;
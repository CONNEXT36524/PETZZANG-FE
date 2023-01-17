import React from 'react';
import './ImgCard.css';

function ImgCard(props) {
    //console.log(props)

    return (
        <>
            {
                props.props0 === undefined
                ? null
                : 
                    <div className="card">
                        <p id="imgContent0"> {props.props0.content} </p>
                        <img src={props.props0.img} className="card-img" alt="이미지"/>
                    </div>
            }
            {
                props.props1 === undefined
                ? null
                : 
                    <div className="card">
                        <p id="imgContent1"> {props.props1.content} </p>
                        <img src={props.props1.img} className="card-img" alt="이미지"/>
                    </div>
            }
            {
                props.props2 === undefined
                ? null
                : 
                    <div className="card">
                        <p id="imgContent2"> {props.props2.content}</p>
                        <img src={props.props2.img} className="card-img" alt="이미지"/>
                    </div>
            }
            {
                props.props3 === undefined
                ? null
                : 
                    <div className="card">
                        <p id="imgContent3"> {props.props3.content}</p>
                        <img src={props.props3.img} className="card-img" alt="이미지"/>
                    </div>
            }

        </>
        
    );
}

export default ImgCard;
import React from 'react';
import './ImgCard.css';

function ImgCard(props) {
    //console.log(props)

    return (
        <>
            {
                props.item === undefined
                ? null
                : 
                    <div className="card">
                        <p id="imgContent0"> {props.item.content} </p>
                        <img src={props.item.img} className="card-img" alt="이미지"/>
                    </div>
            }
        </>
        
    );
}

export default ImgCard;
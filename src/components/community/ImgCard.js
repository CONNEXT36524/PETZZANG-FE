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
                        <p id="imgContent"> {props.item.titleName} </p>
                        <img src={props.item.thumbnail} className="card-img" alt="이미지"/>
                    </div>
            }
        </>
        
    );
}

export default ImgCard;
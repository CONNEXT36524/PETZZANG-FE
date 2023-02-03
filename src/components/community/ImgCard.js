import React from 'react';
import './ImgCard.css';

function ImgCard(props) {
    //console.log(props)

    const onClickHandler=(data)=> {
        console.log(data)
    }

    return (
        <>
            {
                props.item === undefined
                ? null
                : 
                    <div className="card" onClick={() => onClickHandler(props.item.postId)}>
                        <p id="imgContent"> {props.item.titleName} </p>
                        <img src={props.item.thumbnail} className="card-img" alt="이미지"/>
                        {/* <img src="../img/dog1.png" className="card-img" alt="이미지"/>  */}
                    </div>
            }
        </>
    )
}

export default ImgCard;
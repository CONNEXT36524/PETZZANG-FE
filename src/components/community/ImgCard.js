import React from 'react';
import './ImgCard.css';

function ImgCard() {
    return (
        <div className="ImgCardDiv">
            <div className="card" >
                <p id = 'imgContent'>이미지 설명 어쩌구</p>
                <img src="../../img/dog1.png" className="card-img" alt="이미지"/>
            </div>

            <div className="card" >
                <div className="embed-responsive embed-responsive-4by3">
                    <img src="../../img/dog2.png" className="card-img" alt="이미지"/>
                </div>
            </div>
        
            <div className="card" >
                <div className="embed-responsive embed-responsive-4by3">
                    <img src="../../img/dog1.png" className="card-img" alt="이미지"/>
                </div>
            </div>

            <div className="card" >
                <div className="embed-responsive embed-responsive-4by3">
                    <img src="../../img/dog2.png" className="card-img" alt="이미지"/>
                </div>
            </div>
        </div>
        
  );
}

export default ImgCard;
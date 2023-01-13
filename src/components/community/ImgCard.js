import React from 'react';
import './ImgCard.css';

function ImgCard() {
    return (
        <div className="ImgCardDiv">
            <div className="card" >
                <div class="embed-responsive embed-responsive-4by3">
                    <img src="../../img/dog1.png" className="card-img" alt="이미지"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">제목</h5>
                </div>
            </div>

            <div class="card" >
                <div class="embed-responsive embed-responsive-4by3">
                    <img src="../../img/dog2.png" className="card-img" alt="이미지"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">제목</h5>
                </div>
            </div>
        
            <div className="card" >
                <div class="embed-responsive embed-responsive-4by3">
                    <img src="../../img/dog1.png" className="card-img" alt="이미지"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">제목</h5>
                </div>
            </div>

            <div class="card" >
                <div class="embed-responsive embed-responsive-4by3">
                    <img src="../../img/dog2.png" className="card-img" alt="이미지"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">제목</h5>
                </div>
            </div>
        </div>
        
  );
}

export default ImgCard;
import './Search.css';

// 검색게시판에서
// 일상 게시글 & 자랑 게시글 띄우는 card
function SearchDailyCard() {  
    return (
      <div className='searchCardContainer'>
        <img src="../../img/dog1.png" className="searchCardImg" />
        <div className='searchCardContent'>
            <h3>글 제목</h3>
            <h5>글 내용</h5>
            <p>작성자</p>
        </div>
      </div>
    );
}

export default SearchDailyCard;
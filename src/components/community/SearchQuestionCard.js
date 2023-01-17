import './Search.css';

// 검색게시판에서
// 질문 게시글 & 제품추천 게시글 띄우는 card
function SearchQuestionCard() {  
    return (
      <div className='searchCardContainer'>
        <div className='searchCardContent'>
            <h3>글 제목</h3>
            <p>글 내용</p>
            <p>작성자</p>
        </div>
      </div>
    );
}

export default SearchQuestionCard;
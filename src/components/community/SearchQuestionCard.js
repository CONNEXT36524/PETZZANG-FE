import './Search.css';

// 검색게시판에서
// 질문 게시글 & 제품추천 게시글 띄우는 card
function SearchQuestionCard(props) {  
  const onClickHandler=(data)=> {
    console.log(data)
  }

  return (
    <div className='searchCardContainer'
      onClick={() => onClickHandler(props.data)}>
      <div className='searchCardContent'>
        <h3>{props.data.titleName}</h3>
        <p>{props.data.content}</p>
        <p>{props.data.userCode} = 작성자(일단 유저코드)</p>
      </div>
    </div>
  );
}

export default SearchQuestionCard;
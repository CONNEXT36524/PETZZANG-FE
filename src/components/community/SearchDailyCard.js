import './Search.css';

// 검색게시판에서
// 일상 게시글 & 자랑 게시글 띄우는 card
function SearchDailyCard(props) {  
  const onClickHandler=(data)=> {
    console.log(data)
  }

  return (
    <div className='searchCardContainer'
      onClick={() => onClickHandler(props.data)}>
      <img src="../../img/dog1.png" className="searchCardImg" />
      <div className='searchCardContent'>
        <h3>{props.data.titleName}</h3>
        <h5>{props.data.content}</h5>
        <p>{props.data.userCode} = 작성자(일단 유저코드)</p>
      </div>
    </div>
  );
}

export default SearchDailyCard;
import './Search.css';

const SearchSectionDiv = ({boardName}) => {  
    // let boardName = ''
    if(boardName === "daily") {
        boardName = '일상'
    } else if(boardName === "boast") {
        boardName = '자랑'
    } else if(boardName === "question") {
        boardName = '질문'
    } else if(boardName === "recommendation") {
        boardName = '제품 추천'
    }
    
    return (
        <div className='SearchSectionDiv'>
            <hr/>
            <div className='sectionDiv'>
                <button className='section'> | </button>
                <h5> {boardName} 게시판</h5>
            </div>
        </div>
    );
}

export default SearchSectionDiv;
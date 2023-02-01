import './Search.css';

function SearchSectionDiv(props) {  
    let boardName = ''
    if(props.props === "daily") {
        boardName = '일상'
    } else if(props.props === "boast") {
        boardName = '자랑'
    } else if(props.props === "question") {
        boardName = '질문'
    } else if(props.props === "recommendation") {
        boardName = '제품 추천'
    }
    
    return (
        <div className='SearchSectionDiv'>
            <hr/>
            <div className='sectionDiv'>
                <button className='section'> | </button>
                <h4> {boardName} 게시판</h4>
            </div>
        </div>
    );
}

export default SearchSectionDiv;
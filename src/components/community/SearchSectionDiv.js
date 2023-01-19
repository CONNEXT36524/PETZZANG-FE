import './Search.css';

function SearchSectionDiv(props) {  
    return (
        <div className='SearchSectionDiv'>
            <hr/>
            <div className='sectionDiv'>
                <button className='section'> | </button>
                <h5> {props.boardName} 게시판</h5>
            </div>
        </div>
    );
}

export default SearchSectionDiv;
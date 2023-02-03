import React, { useState, useEffect, useRef } from "react";
import './Search.css';
import { useDispatch, useSelector } from "react-redux";
import { addBoardType } from "../../Slice/SearchSlice";

function SearchSectionDiv(props) { 

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addBoardType(props.props))
    }, []);

    console.log(props.props)
    const boardTypeArr = useSelector((state) => state.SearchSlice.boardTypeArr);
    console.log(boardTypeArr)

    
    

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
    

    let firstTime = 1
    const count = boardTypeArr.filter(element => props.props === element).length;
    console.log(count)

    return (
        <>
        {
            boardTypeArr.filter(element => props.props === element).length === 1
            ?
            <div className='SearchSectionDiv'>
                <hr/>
                <div className='sectionDiv'>
                    <button className='section'> | </button>
                    <h4> {boardName} 게시판</h4>
                </div>
            </div>
            
            : null
        }
        </>
    );

    
    
}

export default SearchSectionDiv;
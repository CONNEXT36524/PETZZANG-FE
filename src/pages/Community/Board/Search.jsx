import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import CommunityBanner from "../../../components/banner/CommunityBanner";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import { Container } from "react-bootstrap";
import axios from "axios";
import './Daily.css';
import SearchSectionDiv from "../../../components/community/SearchSectionDiv.js";
import SearchDailyCard from "../../../components/community/SearchDailyCard.js";
import SearchQuestionCard from "../../../components/community/SearchQuestionCard.js";
import Paging from "../../../components/community/Paging.js";
import { setCurPage, rpaging } from "../../../Slice/PagingSlice";



function Search() {
    
    // app.js에서 받은 검색어 찾기
    let getLink = window.location.search;
    let getKeyword = getLink.split('=')[1];	//분리한 배열 중 두번째 요소 변수에 넣기
    let keyword = decodeURI(getKeyword)
    //console.log(keyword);


    const dispatch = useDispatch();
    const [searchList, setSearchList] = useState([]);
    
    useEffect(()=>{
        dispatch(changepagetype("community"))
        getSearch()
        dispatch(rpaging(setPage))
        dispatch(setCurPage(1)); //첫 페이지 설정
    },[dispatch])
    


    // 페이지 설정
    const currentPage = useSelector(state => state.PagingR.page);
    const cntPerPage = useSelector(state => state.PagingR.cntPerPage);

    const setPage = {
        cntPerPage : 3, 
        total : 10, 
        range : 5 
    }

    //api통신 test
	const getSearch = async() => {

        await axios.get(
            '/api/community/search', {
                params:{
                    keyword : keyword
                }
            }
        ).then((response) => 
            setSearchList(response.data)
        ).catch(error => console.log(error))
	}
    console.log(searchList)

    
    const searchListSlice = () =>{
        setPage.total = searchList.length
        dispatch(rpaging(setPage))
        return searchList.slice(cntPerPage*(currentPage-1), cntPerPage*currentPage);
    }

    return (
        <>
        <CommunityBanner />
        <MiddleNav contents={"HOME>커뮤니티>검색 결과"} />
        <Container>
            <div className='searchMain'>
                {/* 검색어 입력후 엔터를 눌렀을때만 이벤트 발생 */}
                <div className='searchResultTextDiv'> 
                    <h3>검색어 '</h3>
                    <h3 className='searchResultText'>{keyword}</h3>
                    <h3>' 에 대한 전체 '{searchList.length}'개의 결과를 찾았습니다.</h3>
                </div>
                {/* { 
                  error
                  ?(console.log("에러"))
                  :(searchList.length > 0 && searchList.map((search)=> (
                        <Card/>))
                    )
                } */}

                {searchListSlice().map((item, index) => (
                    <>
                        <SearchSectionDiv boardName={item.boardType} key={index}/>
                        {
                            item.boardType === 'daily' || item.boardType === 'boast'
                            ? (<SearchDailyCard data={item} />)
                            : (<SearchQuestionCard data={item} />)
                        }
                    </>
                ))}
                
                

                <br/><br/>
                <Paging/> 

                
            </div>
        </Container>
        <br/><br/>
        </>
    );
}

export default Search;
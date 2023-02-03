import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
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
import { addBoardType } from "../../../Slice/SearchSlice";

function Search() {
    // 상단 navbar 색깔 바꾸기
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("community"))
    },[dispatch])

    // app.js에서 받은 검색어 찾기
    let getLink = window.location.search;
    let getKeyword = getLink.split('=')[1];	//분리한 배열 중 두번째 요소 변수에 넣기
    let keyword = decodeURI(getKeyword)
    //console.log(keyword);


    const [searchList, setSearchList] = useState([]);
    useEffect(()=>{
        getSearch()
    }, [])

    // const getSearch = async() => {
    //     let searchQuery = query.get('q') || "";
    //     console.log("쿼리값: ", searchQuery);
    //     let url = `http://localhost:3000/Community/search?q=${searchQuery}`
    //     let response = await fetch(url);
            
    //     let data = await response.json();
    //     if(data.length < 1) {
    //         setError(`검색어 '${searchQuery}'에 대한 결과가 없습니다.` )
    //     } else {
    //         setSearchList(data)
    //     }
    //     setSearchList(data)
    // }

    
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


    // BoardType 리덕스에 저장
    // {searchList.map((item) => (
    //     dispatch(addBoardType(item.boardType))
    // ))}


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
                
                

                {searchList.map((item) => (
                    <>
                        {/* {
                            item.boardType === 'daily' || item.boardType === 'boast'
                            ? <> <SearchSectionDiv props={item.boardType}/>  
                                <SearchDailyCard data={item}/> </>
                            : <> <SearchSectionDiv props={item.boardType}/> 
                                <SearchQuestionCard data={item}/> </>
                        } */}
                        <SearchSectionDiv props={item.boardType}/>
                        {
                            item.boardType === 'daily' || item.boardType === 'boast'
                            ? (<SearchDailyCard data={item}/>)
                            : (<SearchQuestionCard data={item}/>)
                        }
                    </>
                ))}
                
                

                <br/><br/>
                <Paging/> 
                <br/><br/>
                
            </div>
        </Container>
        </>
    );
}

export default Search;
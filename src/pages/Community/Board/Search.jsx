import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Daily.css';


function Card() {  
    return (
      <div className='searchCardContainer'>
        <img src="../../img/dog1.png" className="searchCardImg" />
        <div className='searchCardContent'>
            <h3>글 제목</h3>
            <p>글 내용</p>
            <p>작성자</p>
        </div>
      </div>
    );
}


function Search() {
    
    const [searchList, setSearchList] = useState([]);
    const [query, setQuery] = useSearchParams();
    let [error, setError] = useState("");
    
    useEffect(()=>{
        getSearch()
    },[query])
        
    const getSearch = async() => {
        let searchQuery = query.get('q') || "";
            console.log("쿼리값: ", searchQuery);
            let url = `http://localhost:3000/Community/search?q=${searchQuery}`
            let response = await fetch(url);
            
            let data = await response.json();
            if(data.length < 1) {
                setError(`검색어 '${searchQuery}'에 대한 결과가 없습니다.` )
            } else {
                setSearchList(data)
            }
            setSearchList(data)
        }


    const [searchText, setSearchText] = useState('');
    const onChangeSearchText = (e) => {
        setSearchText(e.target.value);
    };

    const navigate = useNavigate()
    const search = (e) => {
        console.log(e)

        // enter키 눌렀을때
        if(e.key === "Enter") {
            let keyword = e.target.value
            navigate(`/Community/Search?q=${keyword}`)
            // navigate로 화면 이동이 꼭 필요한가?
        }
        // '검색' 클릭했을때
        if(e === "클릭") {
            let keyword = searchText
            navigate(`/Community/Search?q=${keyword}`)
        }
    }
    
    

    return (
        <Container>
            <div className='searchMain'>
                {/* 검색어 입력후 엔터를 눌렀을때만 이벤트 발생 */}
                <input type='text' value={searchText} onChange={onChangeSearchText} placeholder='검색어를 입력하세요.' onKeyDown={(e)=>search(e)}/>
                <input type='submit' value='검색' onClick={(e)=> search('클릭')}/>
                
                <br/><br/>

                { 
                  error
                  ?(console.log("에러"))
                  :(searchList.length > 0 && searchList.map((search)=> (
                        <Card/>))
                    )
                }

                <hr/>
                <div className='sectionDiv'>
                    <button className='section'> | </button>
                    <h5>일상 게시판</h5>
                </div>
                <Card/>
                <hr/>

                
            </div>
        </Container>
    );
}

export default Search;
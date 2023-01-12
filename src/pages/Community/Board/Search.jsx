import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
import { Container } from "react-bootstrap";
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
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("community"))
    },[dispatch])

    // app.js에서 받은 검색어 찾기
    let getLink = window.location.search;
    let getKeyword = getLink.split('=')[1];	//분리한 배열 중 두번째 요소 변수에 넣기
    let keyword = decodeURI(getKeyword)
    console.log(keyword);


    // const [searchList, setSearchList] = useState([]);
    // const [query, setQuery] = useSearchParams();
    // let [error, setError] = useState("");
    
    // useEffect(()=>{
    //     getSearch()
    // },[query])
        

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



    return (
        <Container>
            <div className='searchMain'>
                {/* 검색어 입력후 엔터를 눌렀을때만 이벤트 발생 */}
                

                {/* { 
                  error
                  ?(console.log("에러"))
                  :(searchList.length > 0 && searchList.map((search)=> (
                        <Card/>))
                    )
                } */}

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

import "./Mypage.css"
import { useDispatch, useSelector} from "react-redux/";
import { changepagetype } from "../../Slice/Navslice";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MiddleNav from "../../components/navbar/MNB/MiddleNav";
import MypageBanner from "../../components/banner/MypageBanner";
import Sidebar from "../../components/mypage/Sidebar";
import styled from "styled-components";
import { useState } from "react" 
import { useNavigate } from "react-router-dom";
import dummy from "./data.json"
import Paging from "../../components/community/Paging";
import { setCurPage, rpaging } from "../../Slice/PagingSlice";

const Center = styled.div`
  display: flex;
  flex-direction: row;
`
const Content = styled.div`
    position: relative;
    margin-top: 9rem;
    margin-left: 10rem;
    cursor: pointer;

`
const Title = styled.div`
    margin-top: 1rem;
    flex-direction: row;
    margin-bottom : 1rem;
`
const Sub =styled.div`
    margin-top: 50px;
    left: 1px;
    width: 130vh;
    height: 60vh;
    background-color: rgb(234, 234, 234);
    border: 1px solid rgb(234, 234, 234);
    flex-direction: row;
`

const StyledTable = styled.table`
	border-collapse: collapse;
	thead {
		tr {
			th {
				padding: 15px 20px;
				font-weight: 800;
				border-bottom: 2px solid #eee;
				text-align: center;
			}
		}
	}
	tbody {
		tr {
			td {
				padding: 10px 15px;
				border-bottom: 2px solid #eee;
				text-align: center;
				height: 80px;
			}
		}
	}
	.second-col {
		width: 400px;
	}
	.tbodyDiv:hover {
		cursor: pointer;
	}
`;  

const History=()=>{
    
    const data =['전체', '일상', '자랑', '질문', '제품추천'];
    const currentPage = useSelector(state => state.PagingR.page);
    const cntPerPage = useSelector(state => state.PagingR.cntPerPage);
    const total = useSelector(state => state.PagingR.total);
    const range = useSelector(state => state.PagingR.range);

    const setPage = {
        cntPerPage : 2, 
        total : 6, 
        range : 5 
    }

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changepagetype("mypage"))
        dispatch(rpaging(setPage));
    },[dispatch])
    


    const myList = () =>{
        if (data[btnActive] == "전체" )
        {   
            setPage.total = dummy.post.length
            console.log(setPage.total)
            dispatch(rpaging(setPage))
            return dummy.post.slice(cntPerPage*(currentPage-1), cntPerPage*currentPage);
        }
        else
        {
            setPage.total = dummy.post.filter(post => post.type == data[btnActive]).length
            dispatch(rpaging(setPage))
            return dummy.post.filter(post => post.type == data[btnActive]).slice(cntPerPage*(currentPage-1), cntPerPage*currentPage);
        } 
    } 


    //내가 작성한 글 버튼 
    let [btnActive, setBtnActive] = useState("");
    const toggleActive = (e) => {
        setBtnActive((prev) => {
        dispatch(setCurPage(1));
        console.log("버튼 초기화"+currentPage)
          return e.target.value;
        });
      };


    //내가 작성한 댓글 버튼
    let [btnActive1, setBtnActive1] = useState("");
    const toggleActive1 = (e) => {
        setBtnActive1((prev) => {
          return e.target.value;
        });
      };
    
    //게시글 클릭했을 때 이동
    const navigate = useNavigate();
    const recommendationClick = (props) => {
		navigate("/community/posts", {
			state: {
				title: "a",
			},
		});
	};

    // api로 받아올때 사용 
    // useEffect(() => {
    //     axios
    //       .get("/product-sale-join")
    //       .then((res) => {
    //         setProducts(res.data);
    //       })
    //       .catch((error) => {
    //         console.log("error", error);
    //       });
    //     setCount(products.length);
    //     setIndexOfLastPost(currentPage * postPerPage);
    //     setIndexOfFirstPost(indexOfLastPost - postPerPage);
    //     setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
    //   }, [currentPage, indexOfLastPost, indexOfFirstPost, products, postPerPage]);
     
    //   const setPage = (error) => {
    //     setCurrentPage(error);
    //   };


    return(
        <>
            <MypageBanner/>
            <MiddleNav contents="HOME>마이페이지>펫짱 수첩" />
            <Center>
                <Sidebar/>
                <Content>
                  <Title>
                        <div className="title">내가 작성한 글 보기</div> 
                        <div>
                        {data.map((elm, index) => {   
                            return ( 
                                <button className={(index == btnActive ? "typeBtnActive" : "typeBtn")}
                                    value={index}
                                    onClick={toggleActive}
                                    key = {index}
                                >
                                    {elm}
                                </button>
                                );
                        })}
                        </div>
                  </Title>
                  <Sub>      
                  <StyledTable className="tableDiv">
						<thead>
							<tr>
								<th> No. </th>
								<th> 이미지 </th>
								<th className="second-col"> 제목 </th>
								<th> 글쓴이 </th>
								<th> 작성 날짜 </th>
								<th> 조회수 </th>
								<th> 좋아요수 </th>
							</tr>
						</thead>

						<tbody className="tbodyDiv">
							{myList().map((data, num) => (
								<tr
									num={num}
									onClick={() =>
										recommendationClick(data.id)
									}
								>
									{data.id < 0 ? (
										<td> 공지 </td>
									) : (
										<td> {data.id + 1} </td>
									)}

									<td>
										{" "}
										<img
											src="../../img/dog1.png"
											className="recommendationImg"
										/>{" "}
									</td>
									<td> {data["title"]} </td>
									<td> {data["witer"]} </td>
									<td> {data["date"]} </td>
									<td> {data["clickNum"]} </td>
									<td> {data["likeNum"]} </td>
								</tr>
							))}
						</tbody>
					</StyledTable>
                    <Paging />
                  </Sub>
                  
                  <Title>
                        <div className="title">내가 작성한 댓글 보기</div>
                        <div>
                        {data.map((elm, index) => {   
                            return ( 
                                <button className={(index == btnActive1 ? "typeBtnActive" : "typeBtn")}
                                    value={index}
                                    onClick={toggleActive1}
                                    key = {index}
                                >
                                    {elm}
                                </button>                             
                                );
                        })}
                        </div>
                  </Title>
                  <Sub>            
      
                  </Sub>
                </Content>
            </Center>
      
            
        </>
    );
}
export default History;

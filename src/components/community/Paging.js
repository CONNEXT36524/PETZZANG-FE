import React, { useState } from "react";
import './Paging.css';
import Pagination from "react-js-pagination";


// api 연동해야함
const Paging = (props) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page} //현재페이지
      itemsCountPerPage={props.cntPer} //한 페이지당 보여줄 아이템 갯수
      totalItemsCount={props.total} // 총 아이템 갯수
      pageRangeDisplayed={props.range} // paginator의 페이지 범위
      prevPageText={"‹"} 
      nextPageText={"›"}
      onChange={handlePageChange} //페이지 변경 핸들링 함수
    />
  );
};

export default Paging;
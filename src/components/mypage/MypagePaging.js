import React, { useState, useEffect } from "react";

import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurPage, rpaging } from "../../Slice/PagingSlice";

// api 연동해야함
const MypagePaging = (props) => {

  const dispatch = useDispatch();

  const currentPage = useSelector(state => state.PagingR.page);
  const cntPerPage = useSelector(state => state.PagingR.cntPerPage);
  const total = useSelector(state => state.PagingR.total);
  const range = useSelector(state => state.PagingR.range);


  const handlePageChange = (page) => {
    dispatch(setCurPage(page));
    console.log(page)
  };


  return (
    <Pagination
      activePage={currentPage} //현재페이지
      itemsCountPerPage={cntPerPage} //한 페이지당 보여줄 아이템 갯수
      totalItemsCount={total} // 총 아이템 갯수
      pageRangeDisplayed={range} // paginator의 페이지 범위
      prevPageText={"‹"} 
      nextPageText={"›"} 
      onChange={handlePageChange} //페이지 변경 핸들링 함수
    />
  );
};

export default MypagePaging;
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import '../../pages/Community/Board/Daily.css'

const StyledBtn = styled.button`
  align-items: center;
  text-align: center;
  margin: 3px;
  padding: 5px 15px;
  border-radius: 8px;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.2);
`;


function TypeBtn (props) {
    
  let typeData = []
  
  if (props.data.length === 1) {
    // 강아지가 클릭되었을때
    if (props.data.includes('강아지')) {
      typeData = ['시츄', '말티즈', '시바견','비숑', '포메라니안', '그레이하운드', '푸들', 
      '보더콜리', '웰시코기', '리트리버', '진돗개', '귀한 종', '이외 견종'
      ]
    }

    // 고양이가 클릭되었을때
    else if (props.data.includes('고양이')) {
      typeData = ['러시안 블루', '먼치킨', '터키시 앙고라', '엑조틱', '메인쿤', '스핑크스', '랙돌', 
      '코리안 숏헤어', '아메리칸 숏헤어', '브리티시 숏헤어', '페르시안', '귀한 종', '이외 묘종'
      ]
    }
  }
    
    
  const [checkBtn, setOrders] = useState([]);
  //console.log(checkBtn)

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      props.setTypeBtn(checkBtn) //TypeBtn에서 Daily로 데이터보내기
    }
  }, [checkBtn]);
  
  const onClickHandler = selectedItem => {
    // 이미 선택되어 있을때
    if (checkBtn.includes(selectedItem)) {
      setOrders(checkBtn.filter(order => order !== selectedItem));
      return;
    }

    // 각각 선택하는거로 모두 선택했을때
    if(checkBtn.length === 12) {
      setOrders([...checkBtn, '전체']);
    }
      
    setOrders([...checkBtn, selectedItem]);
  };
  
  // '전체' 클릭했을때
  const onClickAllHandler = selectedItem => {
      
    if (checkBtn.includes("전체")) {
      setOrders([]);
    } 
    else {
      const elArray = [];
      typeData.forEach((el) => elArray.push(el));
      elArray.push('전체')
      setOrders(elArray);
    }
      
  }

  return (
    <>
    <div className='TypeBtnDiv'>
      {
        props.data.length === 1 && (props.data.includes('강아지') || props.data.includes('고양이'))
        ? <StyledBtn className={
            checkBtn.length === typeData.length+1
            ? "menu-item-active"
            : "menu-item"}
            onClick={() => onClickAllHandler('전체')}>
            전체
          </StyledBtn>
        : null
      }
    
      { typeData.map((item,idx) => {
          return(
            <StyledBtn key={idx}
              className={
              checkBtn.find(order => order === item)
              ? "menu-item-active"
              : "menu-item"}
              onClick={() => onClickHandler(item)}>
              {item}
            </StyledBtn>
          )
        })
      }
    </div>
    </>
  )
}

export default TypeBtn;
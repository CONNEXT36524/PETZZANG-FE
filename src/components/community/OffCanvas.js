import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Offcanvas} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Checked_Animal, Unchecked_Animal, Checked_All_Animal, Unchecked_All_Animal } from "../../Slice/OffcanvasSlice";
import { Checked_Sex, Unchecked_Sex, Checked_All_Sex, Unchecked_All_Sex } from "../../Slice/OffcanvasSlice";
import './OffCanvas.css';

const StyledTable = styled.table`
  
  border-collapse: collapse;
  thead{
    tr{
      th{
        padding: 5px 10px;
        font-weight: 500;
        border-bottom: 1px solid #eee;
      }
    }
  }
  tbody{
    tr{
      td{
        padding: 5px 10px;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .second-row{
    width: 150px;
  }
`;

const data1 = [
  {id: 0, title: '강아지'},
  {id: 1, title: '고양이'},
  {id: 2, title: '관상어'},
  {id: 3, title: '햄스터'},
  {id: 4, title: '토끼'},
  {id: 5, title: '새'},
  {id: 6, title: '거북이'},
  {id: 7, title: '기타'}
];

const data2 = [
  {id: 8, title: '수컷'},
  {id: 9, title: '암컷'}
];

const SidebarData = (props) => {
  
  const dispatch = useDispatch();
  const animalTypeArr = useSelector((state) => state.Offcanvas.animalTypeArr);
  const sexTypeArr = useSelector((state) => state.Offcanvas.sexTypeArr);
  //console.log(animalTypeArr)

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      //console.log(animalTypeArr);
      props.setValue(animalTypeArr) //OffCanvas에서 Daily로 데이터보내기 (체크된 종을 담은 배열 보내주기)
    }
  }, [animalTypeArr]);

  const mounted2 = useRef(false);
  useEffect(() => {
    if (!mounted2.current) {
      mounted2.current = true;
    } else {
      props.setValue2(sexTypeArr)
    }
  }, [sexTypeArr]);


  ////////////////////////////  동물 종류  ////////////////////////////////////////
  // 체크박스 단일 선택
  const handleSingleCheck = (checked, title) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      dispatch(Checked_Animal(title)) //리덕스
      
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      dispatch(Unchecked_Animal(title)) //리덕스
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck1 = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 상태 업데이트
      const idArray = [];
      data1.forEach((el) => idArray.push(el.title));
      dispatch(Checked_All_Animal(idArray)) //리덕스
    }
    else {
      // 전체 선택 해제시 빈 배열로 상태 업데이트
      dispatch(Unchecked_All_Animal([])) //리덕스
    }
  }

  ////////////////////////////  성별  ////////////////////////////////////////
  // 체크박스 단일 선택
  const handleSingleCheck2 = (checked, title) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      dispatch(Checked_Sex(title)) //리덕스
      
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      dispatch(Unchecked_Sex(title)) //리덕스
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck2 = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data2.forEach((el) => idArray.push(el.title));
      dispatch(Checked_All_Sex(idArray)) //리덕스
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      dispatch(Unchecked_All_Sex([])) //리덕스
    }
  }

  return (
    <>
    <h5>종 </h5>
    <StyledTable>
      <thead>
        <tr>
          <th>
            <input type='checkbox' name='select-all'
            onChange={(e) => handleAllCheck1(e.target.checked)}
            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
            checked={animalTypeArr.length === data1.length ? true : false} />
          </th>
          <th className='second-row'>전체</th>
        </tr>
      </thead>

      <tbody>
        {data1?.map((data, key) => (
          <tr key={key}>
            <td>
              <input type='checkbox' name={`select-${data.id}`}
              onChange={(e) => handleSingleCheck(e.target.checked, data.title)}
              // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
              checked={animalTypeArr.includes(data.title) ? true : false} />
            </td>
            <td className='second-row'>{data.title}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable> <br/><br/>

    <h5>성별</h5>
    <StyledTable>
      <thead>
        <tr>
          <th>
            <input type='checkbox' name='select-all'
            onChange={(e) => handleAllCheck2(e.target.checked)}
            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
            checked={sexTypeArr.length === data2.length ? true : false} />
          </th>
          <th className='second-row'>전체</th>
        </tr>
      </thead>

      <tbody>
        {data2?.map((data, key) => (
          <tr key={key}>
            <td>
              <input type='checkbox' name={`select-${data.id}`}
              onChange={(e) => handleSingleCheck2(e.target.checked, data.title)}
              // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
              checked={sexTypeArr.includes(data.title) ? true : false} />
            </td>
            <td className='second-row'>{data.title}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
    </>
  );
};

function OffCanvas(props) {
  const [idValue, setValue] = useState(""); // SidebarData에서 OffCanvas로 typeValue 데이터 가져오기
  const [idValue2, setValue2] = useState(""); // SidebarData에서 OffCanvas로 sexValue 데이터 가져오기
  const [show, setShow] = useState(false);
  
  
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      //console.log(idValue);
      props.setTypeValue(idValue) //OffCanvas에서 Daily로 데이터보내기
    }
  }, [idValue]);

  const mounted2 = useRef(false);
  useEffect(() => {
    if (!mounted2.current) {
      mounted2.current = true;
    } else {
      console.log(idValue2);
      props.setSexValue(idValue2) //OffCanvas에서 Daily로 데이터보내기
    }
  }, [idValue2]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button onClick={handleShow} id="showBtn">
        ≡
      </Button>

      {/* offcanvas가 열리면 원래 페이지 스크롤 가능, offcanvas 밖에 화면을 클릭해도 offcanvas 지우지 못하게 */}
      <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={false} restoreFocus={false} id="offcanvasMain">
        <Offcanvas.Header closeButton>
          옵션 선택
        </Offcanvas.Header>

        <Offcanvas.Body>
          <SidebarData setValue={setValue} setValue2={setValue2}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
      
  );
    
}

export default OffCanvas;
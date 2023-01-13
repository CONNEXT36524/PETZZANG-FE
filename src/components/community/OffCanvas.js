import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Offcanvas} from 'react-bootstrap';
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
  

  function sendData(id) {
    props.setValue(id);
  }
  
  // 체크된 종을 담을 배열
  const [checkTypes, setCheckTypes] = useState([]);
  sendData(checkTypes)

  // 체크된 성별을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckTypes(prev => [...prev, id]);
      //sendData(id)
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckTypes(checkTypes.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck1 = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data1.forEach((el) => idArray.push(el.id));
      setCheckTypes(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckTypes([]);
    }
  }

  ////////////////////////////////////////////////////////////////////

  // 체크박스 단일 선택
  const handleSingleCheck2 = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
      //sendData(id)
      
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck2 = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data2.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }
  console.log(checkTypes);
  console.log(checkItems);

  return (
    <>
    <h5>종</h5>
    <StyledTable>
      <thead>
        <tr>
          <th>
            <input type='checkbox' name='select-all'
            onChange={(e) => handleAllCheck1(e.target.checked)}
            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
            checked={checkTypes.length === data1.length ? true : false} />
          </th>
          <th className='second-row'>전체</th>
        </tr>
      </thead>

      <tbody>
        {data1?.map((data, key) => (
          <tr key={key}>
            <td>
              <input type='checkbox' name={`select-${data.id}`}
              onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
              // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
              checked={checkTypes.includes(data.id) ? true : false} />
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
            checked={checkItems.length === data2.length ? true : false} />
          </th>
          <th className='second-row'>전체</th>
        </tr>
      </thead>

      <tbody>
        {data2?.map((data, key) => (
          <tr key={key}>
            <td>
              <input type='checkbox' name={`select-${data.id}`}
              onChange={(e) => handleSingleCheck2(e.target.checked, data.id)}
              // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
              checked={checkItems.includes(data.id) ? true : false} />
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
  const [idValue, setValue] = useState(""); // SidebarData에서 OffCanvas로 데이터 가져오기
  
  const [show, setShow] = useState(false);
  props.setTypeValue(idValue) //OffCanvas에서 Daily로 데이터보내기

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button onClick={handleShow} id="showBtn">
        ≡
      </Button>

      {/* offcanvas가 열리면 원래 페이지 스크롤 불가능, offcanvas 밖에 화면을 클릭해도 offcanvas 지우지 못하게 */}
      <Offcanvas show={show} onHide={handleClose} scroll={false} backdrop={false} restoreFocus={false} id="offcanvasMain">
        <Offcanvas.Header closeButton>
          옵션 선택
        </Offcanvas.Header>

        <Offcanvas.Body>

          <SidebarData setValue={setValue}/>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
      
  );
    
}

export default OffCanvas;
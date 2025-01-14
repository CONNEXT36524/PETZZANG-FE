import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem.jsx";

// import profile from "../assets/profile.png";

const Side = styled.div`
  display: inline-block;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`
// const Profile = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 100%;
// `
const Menu = styled.div`
  margin-top: 150px;
  margin-left: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;
  font-family: Gmarket-Bold;
  font-size : 22px;
`


function Sidebar() {
  const menus = [
    { name: "정보 수정", path: "/mypage/account"},
    { name: "알림", path: "/mypage/notification" },
    { name: "펫짱 수첩", path: "/mypage/history" },
    { name: "펫짱 수상기록", path: "/mypage/awards" },
    
  ];
  return (
    <Side>
      {/* <Profile src={profile}></Profile> */}
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              style={({isActive}) => (isActive? {color:"black", textDecoration: "none"} :{color: "gray", textDecoration: "none"}  )}
              to={menu.path}
              key={index}
              // activeStyle={{color: "black"}}
            >
              <SidebarItem
                menu={menu}>
              </SidebarItem>
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;
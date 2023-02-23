import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import AddOrganizationForm from './AddOrganization';

import logo from '../images/logo2.png'
import { Link } from 'react-router-dom';
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 20px;
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    height: 3px;
    background-color: white;
    border-radius: 5px;
  }
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: #f0f0f0;
  transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
  transition: all 0.3s ease;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  padding: 20px;
  font-family: sans-serif;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-bottom: 20px;
`;

const SidebarTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

const SidebarCloseIcon = styled.span`
  font-size: 24px;
  cursor: pointer;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
  padding:10px;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
  }
  &span:link { text-decoration: none; }


&span:visited { text-decoration: none; }


&span:hover { text-decoration: none; }


&span:active { text-decoration: none; }
`;

const LogoArea = styled.div`
  display:flex;
  height:80px;
  width:100%;
  border:1px solid black;
  background-color:#000;
  align-items:center;
justify-content:center;
`
const AdminPanelHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <HamburgerIcon onClick={handleHamburgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
        <span>    <LogoArea>  
    <Link to="/"><img src={logo} width="150px" height="60px"/></Link>
    </LogoArea>
</span>
        <LogoutButton>Logout</LogoutButton>
      </HeaderContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>
          <SidebarTitle>Menu</SidebarTitle>
          <SidebarCloseIcon onClick={handleSidebarClose}>
            &times;
          </SidebarCloseIcon>
        </SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
          <Link to="/Transaction"> <span>List of Transaction</span></Link>
           
          </SidebarMenuItem>
          <SidebarMenuItem>
          <Link to="/OList"> <span>List of Organization</span></Link>
          

          </SidebarMenuItem>
          <SidebarMenuItem>
            
            <Link to="/AddOrganizationForm"> <span>Add Organization</span></Link>

      </SidebarMenuItem>
    </SidebarMenu>
  </Sidebar>
<br/><br/><br/>
</>
);
};

export default AdminPanelHeader;
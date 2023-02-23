import React from 'react'
import Dash from '../components/Dashboard';

import styled,{css} from 'styled-components';

import AddOrganizationForm from '../components/AddOrganization';
const Dashboard = () => {
  return (
    <><Dash/>
          <TextArea>
            <Title>WELCOME TO ADMIN PANEL</Title>
           
          </TextArea>
    </>
  )
}

export default Dashboard;


export const TextArea = styled.div`
   {
    display :flex; align-items:center;justify-content:center;
  }
`;
export const Title = styled.p`
   {
    font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto,
      "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
    font-size: 65px;
    color: #303030;
    letter-spacing: -2px;
    line-height: 53px;
    padding-bottom: 15px;
    
  }
`;
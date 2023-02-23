import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo2.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <HeaderDiv>

    <LogoArea>  
    <Link to="/"><img src={logo} width="150px" height="60px"/></Link>
    </LogoArea>

    </HeaderDiv>
    </>
  )
}

export default Header


const HeaderDiv = styled.div`
 
display:flex;
align-items:center;
justify-content:center;
  height:80px;
  width:100%;

  background-color:#000;
`

const LogoArea = styled.div`
  display:flex;
  height:80px;
  width:100%;
  border:1px solid black;
  background-color:#000;
  align-items:center;
justify-content:center;
`
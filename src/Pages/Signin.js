import React, { useState } from 'react';
import styled ,{css}from 'styled-components';
import { Link } from 'react-router-dom';

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const SignInInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #0070f3;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0058c1;
  }
`;


const baseStyles = css`
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  text-transform: uppercase;
`;


const containedStyles = css`
  background-color: black;
  color: #ffffff;
  

  &:hover {
    background-color:black;
  }
`;

// Define the styles for the outlined variant
const outlinedStyles = css`
  border: 2px solid black;
  color: black;
  margin-left:10px;
 
`;

// Define the styled button component
const Button = styled.button`
  ${baseStyles}

  ${({ variant }) => variant === 'contained' && containedStyles}
  ${({ variant }) => variant === 'outlined' && outlinedStyles}`

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <SignInContainer>
      <SignInForm onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <SignInInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <SignInInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Link to="/Admin">  <SignInButton variant="contained">SUBMIT</SignInButton ></Link>

      </SignInForm>
    </SignInContainer>
  );
};

export default SignInPage;

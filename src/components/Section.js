
import logo from '../images/b.jpg'

import styled, { css } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

 

 const Section = () => {


  const [active, setActive] = useState(false);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);


  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Set the provider to the window.ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        // Get the signer (account)
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        setActive(true);
        setAccount(address);
        window.location.replace('/Donor');
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.error('No window.ethereum provider found');
    }
  };

  
  const connectWallet1 = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Set the provider to the window.ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        // Get the signer (account)
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        setActive(true);
        setAccount(address);
        window.location.replace('/Donee');
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.error('No window.ethereum provider found');
    }
  };
  const disconnectWallet = () => {
    setActive(false);
    setAccount(null);
    setProvider(null);
  };






    return (
        <div>
            <ParentDiv>

                <SectionDiv>

                    <Text>

                        <Tag>
                            <h1> Donate with Impact and Ease on Masrac's Web3 Platform</h1>
                        </Tag>
           
                    </Text>
                    <ButtonDiv>
                    <Button variant="contained" onClick={connectWallet}>Connect As Donee</Button>
                    <Button variant="outlined" onClick={connectWallet1}>Connect As Donor</Button>
                    
                      </ButtonDiv>
                </SectionDiv>

          
            </ParentDiv>
        </div>

    )
}



export default Section


const ParentDiv = styled.div`


 
display:flex;
align-items:center;
justify-content:center;
  width:100%;

`
const SectionDiv = styled.div`
 
padding-top:160px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:80%;
`

const Text = styled.div`
 
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

padding-bottom:20px;

 
`
const ButtonDiv = styled.div`
 
display:flex;
align-items:center;
justify-content:center;
width:100%;
margin:8px;

 
`
const Desc = styled.div`
 
display:flex;

width:60%;

font-size:17px;
text-align:justify;
font-weight:200;
line-height: 1.6;
font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

 
`
const Tag = styled.div`
 
display:flex;
align-items:center;
width:100%;
font-size:18px;
font-weight: 400;
font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 
`

const baseStyles = css`
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  text-transform: uppercase;
`;

// Define the styles for the contained variant
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
  ${({ variant }) => variant === 'outlined' && outlinedStyles}
`;
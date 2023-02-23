import React from 'react';
import styled,{css} from 'styled-components';
import Header from '../components/Header';

const Wrapper = styled.div`
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const GlobalWrapper = styled.div`
display: flex;
width:100%;
justify-content: center;
  align-items: center;
  height: 70vh;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactHeading = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

const ContactTextField = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  font-family: inherit;
`;

const ContactTextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  font-family: inherit;
`;

const ContactButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
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

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <>
    <Header/>
    <GlobalWrapper>
    <Wrapper>
      <ContactForm onSubmit={handleSubmit}>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactTextField type="text" name="name" placeholder="Name" required />
        <ContactTextField type="email" name="email" placeholder="Email" required />
        <ContactTextArea name="message" rows={4} placeholder="Message" required />
        
      
                    <Button variant="contained">SUBMIT</Button>
      </ContactForm>
    </Wrapper>
    </GlobalWrapper>
    </>
  );
};

export default Contact;

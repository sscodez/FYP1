import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
`;
const LowArea = styled.div`
  display: flex;
  align-items: center;
  width:100%;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const AuthorName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
`;

const BlogDescription = styled.div`
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
  width:50%;
  text-align:justify;
`;

const SubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:50%;
  flex-direction:column;
  margin-top: 2rem;
  background-color: #eee;
  margin:50px;
  padding:20px;
`;

const SubscribeInput = styled.input`
  width: 20rem;
  height: 1.5rem;
  border-radius: 1.1rem;
  border: none;
  padding: 0.7rem;
  font-size: 1rem;
  background-color: #fff;
 
  margin-bottom:10px;
`;

const SubscribeButton = styled.button`
  width: 20rem;
  height: 2.5rem;
  border-radius: 1.1rem;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;

const BlogDescriptionPage = () => {
  return (
    <Container>
      <CoverImage src="https://insidearabia.com/wp-content/uploads/2020/05/IMG_2393.jpg" alt="Cover Image" />
      
      <AuthorName>For Food</AuthorName>
      
      <BlogTitle>EDHI FOUNDATION</BlogTitle>
      <LowArea>
      <BlogDescription>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.      </BlogDescription>
      <SubscribeContainer>
        <SubscribeInput type="email" placeholder="Enter your wallet address" />
        {/* <SubscribeButton>Subscribe</SubscribeButton> */}
        <SubscribeInput type="email" placeholder="Enter your amonut you need" />
        <SubscribeButton>Submit</SubscribeButton>
      </SubscribeContainer>
      </LowArea>
    </Container>
  );
};

export default BlogDescriptionPage;

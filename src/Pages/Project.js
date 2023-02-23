/** @format */

import React from "react";

import styled, { createGlobalStyle } from "styled-components";

const Project = (props) => {
 

  return (
    <Parent>
      <ImageArea image={'https://insidearabia.com/wp-content/uploads/2020/05/IMG_2393.jpg'}> </ImageArea>
      <ContentArea>
        <TitleArea>
          <TitleArea1>
            <TitleAreadiv1>
              <Title1txt>{props.title}</Title1txt>
            </TitleAreadiv1>
            <TitleAreadiv2>
             
            </TitleAreadiv2>
          </TitleArea1>
          <TitleArea2>
            <Title2txt>{props.author}</Title2txt>
            <Date>{props.date}</Date>
          </TitleArea2>
        </TitleArea>
        <TextArea>
          <Text>{props.text}</Text>
        </TextArea>
      </ContentArea>
    </Parent>
  );
};

export default Project;


/** @format */

export const Parent = styled.div`
   {
    display: flex;

    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 30px;
  }
`;
export const ImageArea = styled.div`
   {
    height: 25vh;
    background-image: url(${props => props.image});
    width: 100%;
    background-position: center;
    background-size: cover;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`;

export const ContentArea = styled.div`
   {
    margin-top: -50px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 450;
    font-size: 20px;

    align-items: center;
    font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto,
      "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    color: #000000;
    height: 100%;
  }
`;
export const TextArea = styled.div`
   {
    width: 100%;
    display: inline-flex;
    font-weight: 450;
    display: flex;
    align-items: center;
    word-break: break-all;
    line-height:1.6;
    white-space: pre-wrap;
  }
`;
export const Text = styled.h1`
   {
    font-weight: 500;
    font-size: 14px;
    line-height: 11px;
    padding: 10px;
    overflow: hidden !important;
    line-height:1.6;
    text-overflow: ellipsis;
  }
`;
export const TitleArea = styled.div`
   {
    width: 98%;
    display: flex;

    justify-content: flex-start;
    flex-direction: column;

    padding-bottom: 10px;
    border-left: 1px solid #636161;
  }
`;
export const TitleArea1 = styled.div`
   {
    display: flex;
    width: 100%;

  }
`;
export const TitleArea2 = styled.div`
   {
    width: 100%;
    font-size: 12px;
    padding-left: 20px;
  }
`;
export const Title1txt = styled.h1`
   {
    font-weight: 500;
    font-size: 23px;
    color: #000;
  }
`;
export const Date = styled.div`
   {
    font-family: "Times New Roman", Times, serif;
    color: #636161;
    font-weight: 300;
  }
`;
export const Title2txt = styled.h1`
   {
    font-weight: 500;
    font-size: 15px;
    color: #636161;
  }
`;
export const TitleAreadiv1 = styled.div`
   {
    padding-left: 20px;
    padding-top:20px;
    width: 80%;
  }
`;
export const TitleAreadiv2 = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding-bottom: 10px;
  }
`;
export const IconWrapper = styled.div`
   {
    padding-left: 20px;
  }
`;
/** @format */
import { useEffect, useState } from "react";
import styled from 'styled-components'
import Project from "./Project";
import { Link } from "react-router-dom";
import Header from '../components/Header';

const projects = [
  { title: 'Feroz Jamshed', authorname: 'Organziation', shortText: 'In short, Masrac is a platform that is changing the world of giving for the better. By leveraging the power of web3 technology and creating a community of like-minded individuals, Masrac is empowering individuals to make a positive impact on the world, one donation at a time.', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toptal.com%2Freact%2Freact-context-api&psig=AOvVaw1ZNh-hqtQGqf0E6iIuQGFb&ust=1677179425820000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDj5MHqqf0CFQAAAAAdAAAAABAJ' },
  { title: 'Waqas', authorname: 'Organziation', shortText: 'In short, Masrac is a platform that is changing the world of giving for the better. By leveraging the power of web3 technology and creating a community of like-minded individuals, Masrac is empowering individuals to make a positive impact on the world, one donation at a time.', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toptal.com%2Freact%2Freact-context-api&psig=AOvVaw1ZNh-hqtQGqf0E6iIuQGFb&ust=1677179425820000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDj5MHqqf0CFQAAAAAdAAAAABAJ' },
  { title: 'Hasa Amir', authorname: 'Organziation', shortText: 'In short, Masrac is a platform that is changing the world of giving for the better. By leveraging the power of web3 technology and creating a community of like-minded individuals, Masrac is empowering individuals to make a positive impact on the world, one donation at a time.', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toptal.com%2Freact%2Freact-context-api&psig=AOvVaw1ZNh-hqtQGqf0E6iIuQGFb&ust=1677179425820000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDj5MHqqf0CFQAAAAAdAAAAABAJ' },
  { title: 'Ali Hussain', authorname: 'Organziation', shortText: 'In short, Masrac is a platform that is changing the world of giving for the better. By leveraging the power of web3 technology and creating a community of like-minded individuals, Masrac is empowering individuals to make a positive impact on the world, one donation at a time.', image:'https://media.istockphoto.com/id/1341422151/photo/woman-donating-boxes-with-food-and-clothes-in-donation-center-where-volunteers-are-sorting.jpg?b=1&s=170667a&w=0&k=20&c=1b9HwbeFMJZhSs9WNR5l7cEzM3zJ-iFmjPt8_s9dtlo=' },
  { title: 'Feroz Jamshed', authorname: 'Organziation', shortText: 'In short, Masrac is a platform that is changing the world of giving for the better. By leveraging the power of web3 technology and creating a community of like-minded individuals, Masrac is empowering individuals to make a positive impact on the world, one donation at a time.', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toptal.com%2Freact%2Freact-context-api&psig=AOvVaw1ZNh-hqtQGqf0E6iIuQGFb&ust=1677179425820000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDj5MHqqf0CFQAAAAAdAAAAABAJ' },
  { title: 'Waqas', authorname: 'Organziation', shortText: 'In short, Masrac is a platform that is changing the world of giving for the better. By leveraging the power of web3 technology and creating a community of like-minded individuals, Masrac is empowering individuals to make a positive impact on the world, one donation at a time.', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toptal.com%2Freact%2Freact-context-api&psig=AOvVaw1ZNh-hqtQGqf0E6iIuQGFb&ust=1677179425820000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDj5MHqqf0CFQAAAAAdAAAAABAJ' },
  { title: 'Hasa Amir', authorname: 'Organziation', shortText: 'In short, Masrac is a platform that is changing the world of giving for the better. By leveraging the power of web3 technology and creating a community of like-minded individuals, Masrac is empowering individuals to make a positive impact on the world, one donation at a time.', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toptal.com%2Freact%2Freact-context-api&psig=AOvVaw1ZNh-hqtQGqf0E6iIuQGFb&ust=1677179425820000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDj5MHqqf0CFQAAAAAdAAAAABAJ' },
  { title: 'Ali Hussain', authorname: 'Organziation', shortText: 'In short, Masrac is a platform that is changing the world of giving for the better. By leveraging the power of web3 technology and creating a community of like-minded individuals, Masrac is empowering individuals to make a positive impact on the world, one donation at a time.', image:'https://media.istockphoto.com/id/1341422151/photo/woman-donating-boxes-with-food-and-clothes-in-donation-center-where-volunteers-are-sorting.jpg?b=1&s=170667a&w=0&k=20&c=1b9HwbeFMJZhSs9WNR5l7cEzM3zJ-iFmjPt8_s9dtlo=' },

];

const Donor = () => {
 
  return (
    <div>
      <Header/>
      <Parent>
        <ContentSection>
     
          <TextArea>
            <Title>Donor Dashboard</Title>
          </TextArea>
        </ContentSection>
        <Grid>
          {projects.map((project) => {
            return (
              <Container>
               

                <Project
                  title={project.title}
                  author={project.authorname}
                  text={project.shortText}
                  image={project.thumbnail}
                />
           
              </Container>
            );
          })}
      
        </Grid>
      </Parent>
    </div>
  );
};

export default Donor;



export const Parent = styled.div`
   {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
  }
`;
export const Grid = styled.div`
   {
    display: grid;
    width: 90%;
    padding: 40px;
    grid-template-columns: 23% 23% 23% 23%;
    grid-template-rows: 450px 450px 450px  auto;
    overflow:hidden;
    grid-column-gap: 30px;
    grid-row-gap: 50px;
    
    
   
  }
`;
export const Container = styled.div`
   {
    background: #ffffff;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    display: flex;
    overflow:hidden;
    width:100%;
    border:1px solid black;
  align-itens:center;
  justify-content:center;
`;
export const ContentSection = styled.div`
   {
    width: 90%;
    display: flex;
  }
`;
export const TextArea = styled.div`
   {
    padding-left: 15px;
  }
`;
export const IconArea = styled.div`
   {
    padding: 5px;
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
export const Text = styled.h1`
   {
    font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto,
      "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1.5rem;
    font-weight: 500;
    padding-left: 10px;
    letter-spacing: -0.5px;
    color: #303030;
  }
`;
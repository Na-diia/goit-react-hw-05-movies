import styled from 'styled-components';

export const WrapperReview = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 12px 0;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  transition: all 0.2s ease-in-out;
  padding: 5px;
 
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    color: #000000;
  }
`;

export const ReviewsList = styled.ul`
    list-style: none;
    padding:30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ReviewItem = styled.li`
    // padding:5px;
`;

export const AuthorText = styled.p`
   font-weight: bold;
   font-size: 20px;
   font-family: 'Gambetta', serif;
`; 

export const AuthorSpan = styled.span`
   font-weight: 400;
   font-size:20px;
   
   text-decoration: underline;
`;

export const TextReview = styled.p`
  font-size:18px;
  line-height: 1.2;
`;

export const Title= styled.h2`
    font-family: 'Gambetta', serif;
    font-variation-settings: "wght" 311;
    margin-top:30px;
    margin-bottom: 0.8rem;
    font-weight: bold;
    margin-left: 20px;
    font-size: 28px;
`;
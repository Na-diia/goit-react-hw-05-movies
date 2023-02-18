import styled from 'styled-components';
import background from 'images/background-img.jpg';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0px 0px;
  padding: 0px 0px;

  &::before {
    content: "";
    background-image: url(${background});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.7;
}`;

export const MainTitle = styled.h2`
  font-family: 'Gambetta', serif;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
  margin-bottom: 0.8rem;
  font-weight: bold;
  margin-left: 20px;
  font-size: 28px;
  text-transform: uppercase;
  transition: 700ms ease;
   color: #090907 ;

  &:hover {
    font-variation-settings: "wght" 582; 
    letter-spacing: 1px;
    }
`;
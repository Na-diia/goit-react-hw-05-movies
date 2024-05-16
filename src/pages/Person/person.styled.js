import styled from "styled-components";
import PropTypes from 'prop-types';

import goBack from 'images/back.png';
import background from 'images/background-img.jpg';

export const Biography = styled.div`
font-size: 20px;
font-weight: 400;
height: 170px;
padding: 20px;
overflow-y: scroll;
border: 1px solid black;

scroll-behavior: smooth;
scrollbar-color: black lightgray;
color: #000000 ;`;

export const PersonBox = styled.div`
max-width: 1200px;
height: 100vh;
margin: 0px auto;
padding: 0px 0px;

&::after {
content: '';
position: fixed;
top: 0px;
left: -5px;
width: calc(100% + 10px);
height: calc(100vh + 10px);
background-image: url(${background});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
z-index: -1;
opacity: 0.45;
}`;

export const Button = styled.button`
transition: all .2s;
border: solid;
border-color: #312E27;
border-radius: 50%;
margin-left: 20px;
margin-top: 20px;
width: 50px;
height: 50px;
background-color: transparent;
background-image: url(${goBack});
background-size: cover;
position: relative;
z-index: 1;

&:hover, &:focus {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);}
`;

PersonBox.propTypes = {
    backdrop: PropTypes.string,
};

Button.propTypes = {
    goBack: PropTypes.string,
};
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import background from 'images/background-img.jpg';
import goBack from 'images/back.png';

export const Box = styled.div`
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
    background-image: ${props => props.backdrop === null ? `url(${background})` :
    `url('https://image.tmdb.org/t/p/w500/${props.backdrop}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
    opacity: 0.45;
    }
`;

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

export const CastLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 32px;
  border-radius: 100px;
  transition: all .2s;
  margin-left: 40px;
  margin-right: 12px;
  margin-bottom: 20px; 
  background: #000000;
  background: linear-gradient(to right, #434343, #000000); 
  color: #FFFFFF;  

  &:hover, &:focus{
    font-weight: bold;
  }

  &.active{
    font-weight: bold;
  }
`;

export const ReviewsLink = styled(NavLink)`
 text-decoration: none;
 padding: 10px 20px;
 border-radius: 100px;
 transition: all .2s;
 margin-left: 12px;
 margin-bottom: 20px; 
 background: #000000;
 background: linear-gradient(to right, #434343, #000000); 
 color: #FFFFFF;  

 &:hover, &:focus{
  font-weight: bold;
 }

 &.active{
  font-weight: bold;
}
`;

Box.propTypes = {
  backdrop: PropTypes.string,
};

Button.propTypes = {
  goBack: PropTypes.string,
};

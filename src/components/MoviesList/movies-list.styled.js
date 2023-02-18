import styled from 'styled-components';
import { Link } from 'react-router-dom';

import listIcon from 'images/list-icon.png';

export const Item = styled.li`
    padding: 5px;
    margin-left: 10px;
    position: relative;
    display: flex;

    &::before{
    content: "";
    background-image: url(${listIcon});
    background-size: cover;
    position: absolute;
    width: 20px;
    height: 20px;
    left: -25px;}

    @media screen and (max-width: 480px) {
        &::before{
            width: 15px;
            height: 15px;
        }
    }
`;

export const List = styled.ul`
    list-style: none;
    margin-left: 25px;
`;

export const MovieLink = styled(Link)`
    text-decoration: none;
    color: #22211B  ;
    font-size: 20px;
    font-weight: 500;

    &:hover, &:focus{
    transform: translateX(20px); 
   };

   @media screen and (max-width: 767px) {
    font-size: 16px;

    &:hover, &:focus{
    transform: translateX(16px); };
   };
`;


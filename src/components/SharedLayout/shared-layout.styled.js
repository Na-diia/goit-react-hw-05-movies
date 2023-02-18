import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import headerIcon from 'images/header-icon.png'

export const Navigation= styled.div`
    display: flex;
    margin-left: 0;
    margin-top: 5px;
`

export const Header = styled.header`
    width: 100%;
    display: flex;
    overflow: visible;
    z-index: 1;

    &::before {
    content: "";
    background: #000000;
    background: linear-gradient(to right, #434343, #000000); 
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 5rem;
    box-shadow: rgb(0 0 0 / 30%) 0px 2px 4px;
    z-index: 0;
    }
`;

export const WrapIcon = styled.div`
    margin-left: 30px;
    margin-right: 5px;
    margin-top: 20px;
    width: 50px;
    height: 50px;
    background-image: url(${headerIcon});
    background-size: cover;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 360px) {
       margin-right: 0px;
       width: 45px;
       height: 45px;
    };
`;

export const List = styled.ul`
    list-style: none;
    margin-left: 20px;
    display: flex;
`;

export const Item = styled.li`
    margin-right: 20px;
    margin-top: 5px;
    margin-left: 0;
`;

export const HeaderLink= styled(NavLink)`
    background-color: #fff;
    color:  #432A68 ;
    font-size: 16px;
    text-decoration: none;
    position: relative;

    &:link, &:visited {
        text-transform: uppercase;
        padding: 10px 20px;
        display: inline-block;
        border-radius: 100px;
        transition: all .2s;
    }
    
    &:hover {
        transform: translateY(-3px);
        color: #8E0E00;
        font-weight: bold;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &.active {
        color: #8E0E00;
        font-weight: bold;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`;




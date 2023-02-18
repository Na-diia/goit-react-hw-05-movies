import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

export const Wrap = styled.div`
    margin-top: 24px;
    margin-bottom: 20px;
    margin-left: 78px;

    input {
        background-color: #fff;
    color:  #432A68 ;
    font-size: 16px;
    padding: 10px 24px;
    border-color: transparent;
    transition: all .2s;
    display: inline-block;
    border: 0;
    outline: 0;
    border-radius: 5em;
    position: absolute;
    }
`;

export const Icon = styled(GoSearch)`
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    opacity: 0.7;
    left: 210px;
    top: 10px;
`;
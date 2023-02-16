import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    margin-left: 28px;
`;

export const Btn = styled.button`
    background-color: #fff;
    color:  #432A68 ;
    font-size: 16px;
    padding: 10px 20px;
    display: inline-block;
    border-radius: 100px;
    border-color: transparent;
    transition: all .2s;
    margin-right: 12px;
    margin-bottom: 20px;

    &:hover, &:focus {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    color: #8E0E00;
    font-weight: bold;
    }
    &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    color:  #432A68 ;
    font-weight: 400;
    }
`;


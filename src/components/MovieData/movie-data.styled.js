import styled from 'styled-components';

export const FlexWrap = styled.div`
    padding: 20px;
     display: flex;
`;

export const Wrapper = styled.div` 
    padding: 0px 20px;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;
`;

export const Title = styled.h2`
    font-family: 'Gambetta', serif;
    margin-bottom: 12px;
    margin-top: 12px;
    font-size: 28px;
    text-transform: uppercase;
    font-family: 'Gambetta', serif;
    transition: 700ms ease;
    font-variation-settings: "wght" 311;
    margin-bottom: 0.8rem;
    color: #000000  ;

    &:hover {
    font-variation-settings: "wght" 582; 
    letter-spacing: 1px;
    }
`;

export const Poster = styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    align-self: flex-start;
    height: 400px;
    object-fit: contain;

    &:hover {
    box-shadow: 0 0 2px 1px #000;
}
`; 

export const List = styled.ul`
    list-style: none;
    margin-left: 10px;
`;

export const Name = styled.p`
    font-weight: bold;
    font-size: 22px;
    color: #000000;
    font-family: 'Gambetta', serif;
`;

export const Span = styled.span`
    font-size: 20px;
    font-weight: 400;
    color: #000000 ;
`;
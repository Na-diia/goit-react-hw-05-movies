import styled from 'styled-components';

export const List = styled.ul`
   margin-top: 30px;
   list-style: none;
   padding:5px;
   display:flex;
   justify-content: center;
   flex-wrap: wrap;
   gap:16px;
`;

export const ImageActors = styled.img`
   max-width:  100%;
   border-radius: 4px;
   height: 225px;
`;

export const Item = styled.li`
   flex-basis: 150px;
   box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px, rgb(0 0 0 / 20%) 0px 2px 1px;
 
   &:hover {
      transform: scale(1.05);
   }
`;

export const Info = styled.p`
   font-size:16px;
   font-weight: 500;
   text-align: center;
`;

export const Character = styled.p`
  text-align: center;
`;
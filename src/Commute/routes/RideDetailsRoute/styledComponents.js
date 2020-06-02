import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Header = styled.div `${tw 
`w-40 text-center`};
`;

const Status = styled.div `${tw 
`w-40 text-center `};
  width: 80px;
  border-radius: 100px;
  color:white;
background-color:${props=>props.status==="confirm"?"#2dca73":props.status==="pending"?"#ffb800":"#d7dfe9"};
`;

const Heading = styled.div `${tw 
`w-40 text-left pl-6`};
`;

const Details = styled.div `${tw `flex justify-center items-center`};
border: solid 1px #d7efd9;
`;

export {Header,Heading,Details,Status};
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Header = styled.div `${tw 
`w-40 text-center`};
`;

const Heading = styled.div `${tw 
`w-40 text-center `}
`;

const Headers = styled.div `${tw 
`w-32 text-center `};
`;

const Headings = styled.div `${tw 
`w-40 text-left`}
`;

const Details = styled.div `${tw `flex justify-center items-center `};
border: solid 1px #d7efd9;
`;

const Status = styled.div `${tw 
`w-40 text-center `};
width: 80px;
border-radius: 100px;
color:white;
background-color:${props=>props.status==="confirm"?"#2dca73":props.status==="pending"?"#ffb800":"#d7dfe9"};
`;

export {Header,Heading,Details,Status,Headers,Headings};
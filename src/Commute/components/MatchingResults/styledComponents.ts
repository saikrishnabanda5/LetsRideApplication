import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { boolean } from "@storybook/addon-knobs";

interface StatusProps{
    status:string
}
interface ButtonProps{
    rideButton:boolean
    assetButton:boolean
}
const Requests = styled.div `${tw 
` mb-auto `};
width:80vw;
`;

const MainPage = styled.div `${tw` `}`;

const HomePage = styled.div `${tw` flex justify-center items-center mt-auto `}
top:20%;
left:30%;
right:30%;
`;

const TypeOfRequest = styled.div `${tw 
`flex border-b-2`}
width:80vw;
height: 25px;
`;

const Button = styled.button<ButtonProps> `${tw 
`pr-12 focus:outline-none`}
font-size: 12px;
font-weight: 600;
height: 16px;
color:${props=>props.rideButton?"black":props.assetButton?"black":"gray"};
// border-bottom:${props=>props.rideButton?"2px solid blue":props.assetButton?"2px solid blue":"gray"};
`;

const Header = styled.div `${tw 
` text-center`};
width:10vw;
`;

const Heading = styled.div `${tw 
` text-center `};
width:10vw;
`;

const Headers = styled.div `${tw 
`w-32 text-center `};
`;

const Headings = styled.div `${tw 
`w-40 text-left`};
`;

const Details = styled.div `${tw `flex justify-center items-center `};
border: solid 1px #d7efd9;
`;

const Status = styled.div<StatusProps> `${tw 
`w-40 text-center `};
width: 80px;
border-radius: 100px;
color:white;
background-color:${props=>props.status==="Confirmed"?"#2dca73":props.status==="Pending"?"#ffb800":"#d7dfe9"};
`;


export {Headers,Headings,Requests,TypeOfRequest,Button,HomePage,Details,MainPage,Header,Heading,Status};
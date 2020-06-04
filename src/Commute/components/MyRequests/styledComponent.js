import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo32DarkBlueGreyHKGroteskRegular} from '../../../Common/styleGuide/Typos';

const Heading = Typo32DarkBlueGreyHKGroteskRegular;

const Requests = styled.div `${tw 
` mb-auto border `}
`;

const Navigation = styled.div `${tw 
`   `}
`;

const Results = styled.button `${tw`focus:outline-none p-2`}
background-color:${props=>props.matchingResults?"#0b69ff":"#ffffff"};
color:${props=>props.matchingResults?"#ffffff":"#171f46"};
border:1px solid #d7dfe9;
`;

const Request = styled.button `${tw`focus:outline-none p-2`}
border:1px solid #d7dfe9;
background-color:${props=>props.myRequests?"#0b69ff":"#ffffff"};
color:${props=>props.myRequests?"#ffffff":"#171f46"};
`;

const Details = styled.button `${tw`focus:outline-none p-2`}
background-color:${props=>props.sharedDetails?"#0b69ff":"#ffffff"};
color:${props=>props.sharedDetails?"#ffffff":"#171f46"};
border:1px solid #d7dfe9;
`;

const MainPage = styled.div `${tw` flex flex-col items-stretch justify-between`}`;

const HomePage = styled.div `${tw` flex justify-center items-center mb-12`}
left:30%;
right:30%;
`;

const TypeOfRequest = styled.div `${tw 
`flex mb-10 border-b-2 `}
width: 1128px;
height: 25px;
`;

const Button = styled.button `${tw 
`pr-12 focus:outline-none`}
font-size: 12px;
font-weight: 600;
width: 28px;
height: 16px;
color:${props=>props.rideButton?"black":props.assetButton?"black":"gray"};
// border-bottom:${props=>props.rideButton?"2px solid blue":props.assetButton?"black":"gray"};
`;

export {Heading,Requests,TypeOfRequest,Button,HomePage,Results,Request,Details,MainPage,Navigation};
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo32DarkBlueGreyHKGroteskRegular,Typo14SteelHKGroteskRegular} from '../../../Common/styleGuide/Typos';

const Heading = Typo32DarkBlueGreyHKGroteskRegular;
const Add =Typo14SteelHKGroteskRegular
const HeaderPosition =styled.div `
position: sticky;
top: 0;
`;

const RightComponent =styled.div `${tw
`flex justify-between items-center `};
`;

const HomeScreen =styled.button `${tw` ml-4`};
width: 40px;
height: 40px;
border-radius: 100px;
background-color: #b3f4e1;
`;

const Screen = styled.div `${tw 
`flex justify-center items-center h-screen bg-gray-200 `
}`;

const Requests = styled.div `${tw 
` mb-auto`}
`;

const TypeOfRequest = styled.div `${tw 
`flex mb-10 border-b-2 border-gray-600`}
width: 1128px;
height: 25px;
`;

const Button = styled.button `${tw 
`pr-12`}
font-size: 12px;
width: 28px;
height: 16px;
`;

const Tasks = styled.div `${tw 
`flex justify-between pb-4 pl-2 bg-gray-200`}
`;

const Image = styled.img `${tw 
`pr-2 pl-1`}
`;

const NoOfTasks = styled.div `${tw 
``}
`;

const SortAndFilter = styled.div `${tw 
`flex`}
`;

const Header = styled.div `${tw ``};
`;
const MyDetails= styled.div `${tw `bg-white`};
border: solid 2px #d7efd9;
`;

const Details = styled.div `${tw `flex justify-center items-center`};
border: solid 1px #d7efd9;
`;
const AddButton = styled.button `${tw`
flex pt-4`}
`;
const Data = styled.button `${tw`
`}
`;

const PageRange = styled.button `${tw`
`}
`;

const Footer = styled.button `${tw`
flex justify-between items-center border border-red-500 w-64`}
`;


export {Footer,PageRange,Data,Heading,Requests,MyDetails,TypeOfRequest,Button,Tasks,Image,SortAndFilter,NoOfTasks,Header,Details,Add,AddButton};
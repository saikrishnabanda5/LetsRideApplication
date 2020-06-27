import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo14SteelHKGroteskRegular} from '../../../Common/styleGuide/Typos';

const Add =Typo14SteelHKGroteskRegular;
const PageRange = styled.div `${tw``}`;
const NoOfTasks = styled.div `${tw ``}`;
const Requests = styled.div `${tw 
` mb-auto`}
`;

const Tasks = styled.div `${tw 
`flex justify-between pb-4 pl-2 pt-8 bg-gray-200`}
`;

const Image = styled.div `${tw 
`pr-2 pl-1 `}
`;

const SortAndFilter = styled.div `${tw 
`flex items-center`}
`;


const MyDetails= styled.div `${tw `bg-white`};
border: solid 2px #d7efd9;
`;

const Details = styled.div `${tw `flex justify-center items-center`};
border: solid 1px #d7efd9;
`;

const AddButton = styled.button `${tw`
flex pt-4 focus:outline-none`}
`;

const Footer = styled.div `${tw`
flex justify-between items-center `}
`;


export {Requests,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange};
// Requests,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange
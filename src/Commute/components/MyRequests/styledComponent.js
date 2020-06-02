import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo32DarkBlueGreyHKGroteskRegular} from '../../../Common/styleGuide/Typos';

const Heading = Typo32DarkBlueGreyHKGroteskRegular;

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

export {Heading,Requests,TypeOfRequest,Button};
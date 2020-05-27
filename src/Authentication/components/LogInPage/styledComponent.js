import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo32DarkBlueGreyRubikRegular,Typo12SteelHKGroteskSemiBold,Typo14DarkBlueGreyHKGroteskRegular} from '../../../common/styleGuide/Typos'

const Image = styled.img `${tw 
``
}`

const ErrorMessage = styled.div `${tw 
`text-red-600`
}`

const LogInStyle = styled.div `${tw 
`flex flex-col  p-10  bg-white`
}`

const LogInView = styled.div `${tw 
`flex justify-center items-center h-screen bg-gray-200`
}`

const Header = Typo32DarkBlueGreyRubikRegular
const ClickLogIn= Typo14DarkBlueGreyHKGroteskRegular
const Password = Typo12SteelHKGroteskSemiBold
const UserName = Typo12SteelHKGroteskSemiBold

export {ErrorMessage,Header,ClickLogIn,LogInStyle,LogInView,Image,UserName,Password};
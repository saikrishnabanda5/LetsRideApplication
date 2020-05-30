import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo12SteelHKGroteskSemiBold,Typo14DarkBlueGreyHKGroteskRegular} from '../../../Common/styleGuide/Typos';

const ClickLogIn= Typo14DarkBlueGreyHKGroteskRegular;
const Password = Typo12SteelHKGroteskSemiBold;
const UserName = Typo12SteelHKGroteskSemiBold;
const Image = styled.img `${tw 
``
}`;

const Header =styled.div `${tw
``};
position:fixed`;

const ErrorMessage = styled.div `${tw 
`text-red-600`
}`;

const LogInStyle = styled.div `${tw 
`flex flex-col p-12 bg-white`
}`;

const LogInView = styled.div `${tw 
`flex justify-center items-center h-screen bg-gray-200`
}`;

const Account = styled.div `${tw 
``
}`;

const SignUp = styled.button `${tw 
`text-blue-500`
}`;

export {Header,ErrorMessage,ClickLogIn,LogInStyle,LogInView,Image,UserName,Password,SignUp,Account};
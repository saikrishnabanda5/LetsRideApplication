import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo32DarkBlueGreyRubikRegular,Typo12SteelHKGroteskSemiBold,Typo14DarkBlueGreyHKGroteskRegular} from '../../../Common/styleGuide/Typos';

const Heading = Typo12SteelHKGroteskSemiBold;
const Header = Typo32DarkBlueGreyRubikRegular;
const ClickLogIn= Typo14DarkBlueGreyHKGroteskRegular;

const SignIn = styled.div `${tw 
`ml-auto mr-auto p-64 bg-gray-200 m-2`
}`;


const Details = styled.div `${tw 
`flex flex-col bg-white p-8 m-2 `
}`;

const ErrorMessage = styled.div `${tw 
`text-red-600 mb-5 h-4`
}`;

const Field = styled.div `${tw 
`flex`
}`;

const InputField = styled.div `${tw 
`flex flex-col`
}`;

const Account = styled.div `${tw 
``
}`;

const SignInButton = styled.div `${tw 
`bg-black text-white text-center p-2 rounded`
}`;

const SignInStyle = styled.div `${tw 
`flex flex-col p-10  bg-white`
}`;

const Login = styled.button `${tw 
`text-blue-500 focus:outline-none`
}`;

const ForLogIn = styled.div `${tw 
`flex items-center justify-between pt-4`
}`;


const Image = styled.img `${tw 
`-ml-4 w-10 h-10 pr-3`
}`;

const ImageIbhubs = styled.img `${tw 
``
}`;



const Icon = styled.div `${tw 
``
}`;


const SignUpView = styled.div `${tw 
`flex justify-center items-center h-screen`}
background-color:#f1f7ff;
`;


export {SignIn,Image,ImageIbhubs,Field,Icon,InputField,Details,Heading,ErrorMessage,SignInButton,SignInStyle,Header,ClickLogIn,Account,Login,ForLogIn,SignUpView};
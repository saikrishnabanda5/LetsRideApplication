import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo32DarkBlueGreyRubikRegular,Typo12SteelHKGroteskSemiBold,Typo14DarkBlueGreyHKGroteskRegular} from '../../../Common/styleGuide/Typos';

const Header = Typo32DarkBlueGreyRubikRegular;
const ClickLogIn= Typo14DarkBlueGreyHKGroteskRegular;
const Password = Typo12SteelHKGroteskSemiBold;
const UserName = Typo12SteelHKGroteskSemiBold;
const Image = styled.img `${tw 
`-ml-4 w-10 h-10 pr-3`
}`;

const ErrorMessage = styled.div `${tw 
`text-red-600 mb-5 h-4`
}`;

const LogInStyle = styled.div `${tw 
`flex flex-col p-12 bg-white`
}`;

const LogInView = styled.div `${tw 
`flex justify-center items-center h-screen`}
background-color:#f1f7ff;
`;

const Account = styled.div `${tw 
`pr-2`
}`;

const SignUp = styled.button `${tw 
`text-blue-500`
}`;

const ForSignUp = styled.button `${tw 
`flex items-center justify-between pt-4`
}`;

const ImageIbhubs = styled.img `${tw 
``
}`;

const Field = styled.div `${tw 
`flex`
}`;

const Icon = styled.div `${tw 
``
}`;

const InputField = styled.div `${tw 
`flex flex-col`
}`;


export {ErrorMessage,Header,ClickLogIn,LogInStyle,LogInView,UserName,Password,SignUp,Account,ForSignUp,InputField,Image,Field,Icon,ImageIbhubs};
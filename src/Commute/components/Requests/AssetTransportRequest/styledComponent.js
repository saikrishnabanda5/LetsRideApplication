import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo20DarkBlueGreyHKGrotestBold,Typo12HKGroteskSemiBoldSteel,Typo32DarkBlueGreyRubikRegular,Typo12SteelHKGroteskSemiBold,Typo14DarkBlueGreyHKGroteskRegular} from '../../../../Common/styleGuide/Typos'

const Image = styled.img `${tw 
``
}`
const UserFlexibility =styled.div`${tw
`flex pb-4`
}`
const FromAddress = Typo12HKGroteskSemiBoldSteel
const ToAddress = Typo12HKGroteskSemiBoldSteel
const DateTime = Typo12HKGroteskSemiBoldSteel
const Flexibility =Typo12HKGroteskSemiBoldSteel
const Heading =Typo12HKGroteskSemiBoldSteel
// const {FromAddress,ToAddress,DateTime,Flexibility}=Typo12HKGroteskSemiBoldSteel
const Operations = styled.div `${tw 
`flex  items-center pb-4`
}`;

const PageView = styled.div `${tw 
`flex justify-center items-center h-screen bg-gray-200`
}`;

const Availability = styled.div `${tw 
``
}`;

const Counter = styled.div `${tw 
``
}`;

const RequestRideStyle = styled.div `${tw 
`flex flex-col p-12 bg-white`}
  border-radius: 6px;
  box-shadow: 0 4px 40px 0 rgba(23, 31, 70, 0.16);
  border: solid 1px #d7dfe9;
  background-color: #ffffff;
`;

const Mandatory = styled.div `
color:#ff0b37;
padding-right:16px;
`;

const Address = styled.div `${tw 
`flex  items-center pb-1`
}`;

const Assets = styled.div `${tw 
``
}`;
const Others = styled.div `${tw 
`flex flex-col`
}`;


const Header = Typo20DarkBlueGreyHKGrotestBold

export {Heading,Others,PageView,Header,FromAddress,ToAddress,DateTime,RequestRideStyle,Flexibility,UserFlexibility,Operations,Availability,Counter,Mandatory,Address,Assets};
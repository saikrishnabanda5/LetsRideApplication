import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Header =styled.div `${tw
`flex justify-between items-center pl-12 pr-12`};
height: 72px;
background-color: #ffffff;
`;

const HeaderPosition =styled.div `
position: sticky;
top: 0;
`;

const Image = styled.img `${tw 
``}`;

const RightComponent =styled.div `${tw
`flex justify-between items-center `};
`;

const HomeScreen =styled.button `${tw` ml-4 focus:outline-none`};
width: 40px;
height: 40px;
border-radius: 100px;
background-color: #b3f4e1;
`;

const Screen = styled.div `${tw 
`flex justify-center items-center h-screen bg-gray-200`
}`;

const HomePage = styled.div `${tw 
`mb-auto mt-24`
}`;


export {Header,HeaderPosition,Image,RightComponent,HomeScreen,Screen,HomePage};
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import Loader from 'react-loader-spinner';
const Button =styled.button `${tw
`text-white focus:outline-none`};
width: 320px;
height: 40px;
border-radius: 4px;
background-color: #0b69ff;
`;
const StyledLoader = styled(Loader)`
    ${tw `flex justify-center`}
`;
export {Button,StyledLoader};
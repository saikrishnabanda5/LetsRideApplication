import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Input = styled.input `${tw 
` `}
border:${props=>props.error==="Required"&&props.inputValue===""?"1px solid #ff0b37":"1px solid #7e858e"};
background-color:${props=>props.error==="Required"&&props.inputValue===""?"rgba(255, 11, 55, 0.05)":"#ffffff"};
width: 320px;
height: 35px;
border-radius: 2px;
`;

export {Input};




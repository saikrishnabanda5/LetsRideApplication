/** @jsx jsx */
import { css } from '@emotion/core'
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ButtonComponent = styled.button`
padding:20px;
background-color:red;
margin:20px
`;

const ButtonText  = styled.div`
color:white
`;

const BaseButtonStyle = css`
    background-color:green;
`;



export {ButtonComponent,ButtonText,BaseButtonStyle};
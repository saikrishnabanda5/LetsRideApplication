import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const Button =styled.button `${tw
`text-white  `};
background:${props=>props.backgroundColor};
padding:${props=>props.padding};
width: 320px;
  height: 40px;
  border-radius: 4px;
  background-color: #0b69ff;
`;

export {Button}
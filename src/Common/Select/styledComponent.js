import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SelectTag = styled.select `${tw 
` focus:outline-none`};
  width:120px;
`;

const Option = styled.option `${tw 
` focus:outline-none`};
`;

const SelectTagDetails = styled.select `${tw 
` focus:outline-none`};
  width: 320px;
  height: 35px;
  border-radius: 2px;
  outline:none
  border: solid 1px #7e858e;
  background-color: #ffffff;
  margin-bottom:20px;
`;

export {SelectTag,SelectTagDetails,Option};




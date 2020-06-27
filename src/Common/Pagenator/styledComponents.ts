import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Pages = styled.div `${tw 
`flex text-xl`}
`
const LeftArrow = styled.button `${tw 
`bg-white  p-1`}
color:#7e858e;
border:1px solid #d7dfe9;
`

const RightArrow = styled.button `${tw 
`bg-white  p-1`}
color:#7e858e;
border:1px solid #d7dfe9;
`

const CurrentPageNumber = styled.div `${tw 
`bg-white  p-1`};
color:#7e858e;
border:1px solid #d7dfe9;
`
const TotalNumberOfPages = styled.div `${tw 
`bg-white  p-1`};
color:#7e858e;
border:1px solid #d7dfe9;
`

export  {Pages,LeftArrow,CurrentPageNumber,TotalNumberOfPages,RightArrow}
import styled from 'styled-components';

const DivOverflowX = styled.div`
overflow-x: auto;

&::-webkit-scrollbar-track{
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.contrastText};
}

&::-webkit-scrollbar{
  height: 5px;
  background-color: ${({ theme }) => theme.colors.contrastText};
}

&::-webkit-scrollbar-thumb{
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => `${theme.colors.primary}`};
}
`;

export default DivOverflowX;

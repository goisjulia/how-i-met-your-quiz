import React from 'react';
import styled from 'styled-components';
import { Home } from '@styled-icons/boxicons-solid';
import Link from '../Link';

const HomeDefault = styled(Home)`
  color: ${({ theme }) => `${theme.colors.contrastText}`};;
  height: 25px;
  width: 25px;

  &:hover {
    color: ${({ theme }) => `${theme.colors.contrastText}aa`};
  }
`;

const IconContainer = styled.div`
  display: inline;
  margin-right: 10px;
`;

export default function ButtonHome() {
  return (
    <IconContainer
      as={Link}
      href="/"
    >
      <HomeDefault />
    </IconContainer>
  );
}

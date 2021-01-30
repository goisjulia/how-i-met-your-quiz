import React from 'react';
import styled from 'styled-components';

const SpinnerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;

  & > div {
    display: inline-flex;
    height: 4rem;
    width: 1rem;
    background: ${({ theme }) => theme.colors.secondary};
    margin: 0 3px;
    animation: changeHeight;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

  & > div:nth-child(2) {
    animation-delay: 0.1s;
  }

  & > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  & > div:nth-child(3) {
    animation-delay: 0.3s;
  }

  & > div:nth-child(4) {
    animation-delay: 0.4s;
  }

  & > div:nth-child(5) {
    animation-delay: 0.5s;
  }

  @keyframes changeHeight {
    0% { height: 4rem; }
    50% { height: 1rem; }
    100% { height: 4rem; }
  }

`;

export default function Spinner() {
  return (
    <>
      <SpinnerBody>
        <div />
        <div />
        <div />
        <div />
        <div />
      </SpinnerBody>
    </>
  );
}

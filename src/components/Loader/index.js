import React from 'react';
import styled from 'styled-components';
import Spinner from '../Loading';

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:100vw;
  backdrop-filter: blur(300px);

`;

export default function Loader() {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
}

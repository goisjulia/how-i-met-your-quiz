import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function Logo() {
  const router = useRouter();

  return (
    <LogoContainer onClick={(e) => {
      e.preventDefault();
      router.push('/');
    }}
    >
      <img src="https://fontmeme.com/permalink/210127/0b75dba7d920d93144d1a258d3e64bfb.png" alt="Logo" border="0" />
    </LogoContainer>
  );
}

// Logo.propTypes = {
//   className: PropTypes.string.isRequired,
// };

// const QuizLogo = styled(Logo)`
// `;

const LogoContainer = styled.div`
  margin: auto;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Logo;

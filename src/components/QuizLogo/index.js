import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
    return (
        <LogoContainer>
            <img src="https://fontmeme.com/permalink/210127/0b75dba7d920d93144d1a258d3e64bfb.png" alt="Logo" border="0" />
        </LogoContainer>

    );
}

Logo.propTypes = {
    className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
    margin: auto;
    display: block;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export default QuizLogo;
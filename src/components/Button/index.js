import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonSubmit = styled.button`
    height: 2.5rem;
    width: 100%;
    padding: 0px 10px;
    border: none;
    margin: 10px 0;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 12pt;
    font-weight: 700;
    cursor: pointer;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.darkGray};
      color: white;
      cursor: not-allowed;
    }

    &:hover &:not(:disabled) {
        box-shadow: none;
        border: 2px solid;
    }
`;

ButtonSubmit.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonSubmit.defaultProps = {
  type: 'button',
  disabled: false,
};

// eslint-disable-next-line react/prop-types
export default function Button({ title, type, disabled }) {
  return (
    <ButtonSubmit type={type} disabled={disabled} >
      {title}
    </ButtonSubmit>
  );
}

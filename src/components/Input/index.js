import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputDefault = styled.input`
    height: 2.5rem;
    width: 100%;
    margin: 10px 0;
    padding: 0px 10px;
    border: 1px solid;
    border-radius: 2px;
    background-color: transparent;
    outline: none;
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 12pt;
    font-weight: 700;

    &:focus, &:hover {
        box-shadow: none;
        border: 2px solid;
        /* box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.gray}; */
    }
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <>
      <InputDefault
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

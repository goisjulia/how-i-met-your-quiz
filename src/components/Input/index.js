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

InputDefault.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder }) {
  return (
    <InputDefault placeholder={placeholder} onChange={onChange} />
  );
}

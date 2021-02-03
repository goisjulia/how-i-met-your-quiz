import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  height: 2.5rem;
  width: 100%;
  padding: 0px 10px;
  border: none;
  margin: 20px 0;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mainBg};
  font-size: 12pt;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: white;
    cursor: not-allowed;
  }

  &:focus{
    outline: none;
  }

  &:hover :not(:disabled) {
    transform: scale(1.02);
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  children: PropTypes.node,
};

export default Button;

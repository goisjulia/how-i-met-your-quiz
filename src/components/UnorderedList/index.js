import styled from 'styled-components';

const UnorderedList = styled.ul`
  list-style-type: circle;
  font-size: 13pt;
  
  & > li {
    margin-bottom: 15px;

    .display-flex {
      display: flex;
      align-items: center;
    }
  }

  div {
    margin: 8px 8px 8px 8px;
    height: 22px;
    width: 22px;
    display: inline-block;
    border-radius: ${({ theme }) => theme.borderRadius};
    
    &.blue {
      background-color: ${({ theme }) => theme.colors.secondary};
    }

    &.green {
      background-color: ${({ theme }) => theme.colors.success};
    }

    &.red {
      background-color: ${({ theme }) => theme.colors.wrong};
    }
  }

`;

export default UnorderedList;

import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  backdrop-filter: blur(30px);
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  h2 {
    font-size: 13pt;
  }

  p {
    font-size: 12pt;
    font-weight: 400;
    line-height: 1.25;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mainBg};
  text-transform: uppercase;

  h1 {
    font-size:12pt;
  }
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  h1 {
    font-size: 12pt;
    text-transform: uppercase;
    padding-bottom: 10px;
  }

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainBg};
  background-color: ${({ theme }) => `${theme.colors.primary}ee`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: block;

  text-align: left;
  font-family: Lato, sans-serif;
  min-height: 2.5rem;
  width: 100%;
  /* border: 1px solid ${({ theme }) => theme.colors.contrastText}; */
  border: none;
  font-size: 12pt;

  &:not([data-submitted]):hover ,
  &[data-submitted="false"]:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}dd`};
    transform: scale(1.01);
    font-weight: 700;
  }

  &[data-submitted="true"] {
    background-color: ${({ theme }) => `${theme.colors.primary}bb`};
    cursor: not-allowed;

    &[data-selected="true"]{
      cursor: auto;
      font-weight: 700;

      &[data-correct="true"]{
        animation: changeColorSuccess 1s linear forwards;
      }

      &[data-correct="false"]{
        animation: changeColorError 1s linear forwards;
      }
    }
  }

  @keyframes changeColorSuccess {
    to { 
      background-color: ${({ theme }) => `${theme.colors.success}`}; 
      color:  ${({ theme }) => `${theme.colors.contrastText}`};
    }
  }

  @keyframes changeColorError {
    to { 
      background-color: ${({ theme }) => `${theme.colors.wrong}`}; 
      color:  ${({ theme }) => `${theme.colors.contrastText}`};
    }
  }
`;

export default Widget;

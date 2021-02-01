import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => `${theme.colors.mainBg}`};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}90`};
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
    background-color: ${({ theme }) => `${theme.colors.primary}70`};
    transform: scale(1.05);
  }

  &[data-submitted="true"] {
    background-color: ${({ theme }) => `${theme.colors.primary}50`};
    cursor: not-allowed;

    &[data-selected="true"]{
      background-color: ${({ theme }) => `${theme.colors.secondary}`};
      color:  ${({ theme }) => `${theme.colors.mainBg}`};
      cursor: auto;

      &[data-correct="true"]{
        background-color: ${({ theme }) => `${theme.colors.success}`};
        color:  ${({ theme }) => `${theme.colors.contrastText}`};
      }

      &[data-correct="false"]{
        background-color: ${({ theme }) => `${theme.colors.wrong}`};
      }
    }
  }
`;

export default Widget;

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
    background-color: ${({ theme }) => `${theme.colors.primary}bb`};
    transform: scale(1.01);
    font-weight: 700;
  }

  &[data-submitted="true"] {
    background-color: ${({ theme }) => `${theme.colors.primary}50`};
    cursor: not-allowed;

    &[data-selected="true"]{
      color:  ${({ theme }) => `${theme.colors.white}`};
      cursor: auto;
      font-weight: 700;

      &[data-correct="true"]{
        background-color: ${({ theme }) => `${theme.colors.success}`};
        /* color:  ${({ theme }) => `${theme.colors.contrastText}`}; */
        animation: changeColorSucess 0.7s linear;
      }

      &[data-correct="false"]{
        background-color: ${({ theme }) => `${theme.colors.wrong}`};
        animation: changeColorError 0.7s linear;
      }
    }
  }

  @keyframes changeColorSucess {
    from { background-color: ${({ theme }) => `${theme.colors.primary}70`}; }
    to { background-color: ${({ theme }) => `${theme.colors.success}`}; }
  }

  @keyframes changeColorError {
    from { background-color: ${({ theme }) => `${theme.colors.primary}70`}; }
    to { background-color: ${({ theme }) => `${theme.colors.wrong}`}; }
  }
`;

export default Widget;

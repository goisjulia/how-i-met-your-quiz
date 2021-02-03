import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 45px 0;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;

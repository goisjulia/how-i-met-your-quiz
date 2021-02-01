/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import Widget from '../Widget';

const QuizStatusContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: flex-start;
  padding: 10px 5px;
  width: 100%;
  margin: auto;
  /* margin-top: 40px; */
  /* border-radius: ${({ theme }) => `${theme.borderRadius}`}; */
`;

// QuizStatusContainer.Header = styled.header`
//   background-color: ${({ theme }) => `${theme.colors.primary}`};
//   color: ${({ theme }) => `${theme.colors.contratText}`};
// `;

// QuizStatusContainer.Content = styled.main`

//   background-color: ${({ theme }) => `${theme.colors.primary}`};
//   color: ${({ theme }) => `${theme.colors.contrastText}`};
//   background-color: ${({ theme }) => `${theme.colors.mainBg}`};
// `;

QuizStatusContainer.Question = styled.div`
  padding: 6px;
  width: 1.9rem;
  text-align: center;
  color: ${({ theme }) => `${theme.colors.white}`};
  background-color: ${({ theme }) => `${theme.colors.secondary}90`};
  border-radius: ${({ theme }) => `${theme.borderRadius}`};
  box-shadow: 1px 1px 0 rgb(0 0 0 / 20%), inset 0 -1px 1px 0 rgb(0 0 0 / 30%);
  margin: 3px 1px;

  &[data-actual="true"]{
    background-color: ${({ theme }) => `${theme.colors.secondary}`};
    /* border: 2px solid ${({ theme }) => `${theme.colors.contrastText}`}; */
  }

  &[data-correct="true"]{
    background-color: ${({ theme }) => `${theme.colors.success}`};
  }

  &[data-correct="false"]{
    background-color: ${({ theme }) => `${theme.colors.wrong}`};
  }
`;

export default function QuizStatus({ questions, actualQuestion, results }) {
  return (
    <QuizStatusContainer>
      {questions.map((question, index) => (
        <QuizStatusContainer.Question
          data-actual={actualQuestion === index}
          data-correct={results[index]}
          key={`questionStatus__${index}`}
        >
          {index + 1}
        </QuizStatusContainer.Question>
      ))}
    </QuizStatusContainer>
  );
}

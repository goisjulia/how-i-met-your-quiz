/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Home } from '@styled-icons/boxicons-solid';
import Link from '../Link';

const QuizStatusContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: flex-start;
  padding: 10px 5px;
  width: 100%;
  margin-left: 7px;
  align-items: center;
`;

QuizStatusContainer.Question = styled.div`
  padding: 6px;
  width: 2rem;
  text-align: center;
  color: ${({ theme }) => `${theme.colors.contrastText}`};
  background-color: ${({ theme }) => `${theme.colors.secondary}90`};
  border-radius: ${({ theme }) => `${theme.borderRadius}`};
  box-shadow: 1px 1px 0 rgb(0 0 0 / 20%), inset 0 -1px 1px 0 rgb(0 0 0 / 30%);
  margin: 3px 1px;

  &[data-actual="true"]{
    background-color: ${({ theme }) => `${theme.colors.secondary}`};
  }

  &[data-correct="true"]{
    background-color: ${({ theme }) => `${theme.colors.success}`};
  }

  &[data-correct="false"]{
    background-color: ${({ theme }) => `${theme.colors.wrong}`};
  }
`;

const HomeDefault = styled(Home)`
  color: ${({ theme }) => `${theme.colors.contrastText}`};;
  height: 25px;
  width: 25px;

  &:hover {
    color: ${({ theme }) => `${theme.colors.contrastText}aa`};
  }
`;
const IconContainer = styled.div`
  display: inline;
  margin-right: 10px;
`;

export default function QuizStatus({ questions, actualQuestion, results }) {
  return (
    <QuizStatusContainer
      as={Link}
      href="/"
    >
      <IconContainer>
        <HomeDefault />
      </IconContainer>
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

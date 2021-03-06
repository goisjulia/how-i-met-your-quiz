/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Check } from '@styled-icons/boxicons-regular';
import { CloseOutline } from '@styled-icons/evaicons-outline';
import Widget from '../../components/Widget';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import Button from '../../components/Button';
import Spinner from '../../components/Loading';
import QuizStatus from '../../components/QuizStatusBar';
import UnorderedList from '../../components/UnorderedList';
import GitHubCorner from '../../components/GitHubCorner';
import ButtonHome from '../../components/Button/ButtonHome';
import DivOverflowX from '../../components/DivOverflowX';

function RulesWidget({ isExternal, totalQuestions, onSubmit }) {
  return (
    <Widget>
      <Widget.Header>
        {isExternal && (
          <ButtonHome />
        )}
        <h3>
          Regras
        </h3>
      </Widget.Header>
      <Widget.Content>
        <UnorderedList>
          {!isExternal && (
            <li>
              ⚠️
              {' '}
              <b>ALERTA: Contém spoilers! </b>
              {' '}
              ⚠️
            </li>
          )}
          <li>
            O quiz é composto por
            {' '}
            {totalQuestions}
            {' '}
            questões;
          </li>
          <li> Cada questão vale 10 pontos;</li>
          <li>
            {' '}
            O andamento pode ser acompanhado conforme abaixo:
            <ul>
              <li className="display-flex">
                <div className="blue" />
                - questão atual
              </li>
              <li className="display-flex">
                <div className="green" />
                - questão correta
              </li>
              <li className="display-flex">
                <div className="red" />
                - questão incorreta
              </li>
            </ul>
          </li>
        </UnorderedList>

        <Button
          type="button"
          onClick={() => {
            onSubmit();
          }}
        >
          Challenge accepted!
        </Button>

      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget
      as={motion.section}
      transition={{ duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <h2>
          Espere um pouquinho...
        </h2>
      </Widget.Header>

      <Widget.Content>
        <Spinner />
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget({ results, name }) {
  const router = useRouter();
  const punctuation = results.filter((result) => result).length * 10;

  const Score = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 28pt;
    text-align:center;
    margin: 30px 0;
  `;

  const CheckIcon = styled(Check)`
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.colors.success};
  `;

  const CloseOutlineIcon = styled(CloseOutline)`
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.colors.wrong};
  `;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          Resultado
        </h3>
      </Widget.Header>
      <Widget.Content>
        <h2>
          {name !== '0' && (
            <span>
              {name}
              {', '}
              sua pontuação foi:
            </span>
          )}

          {name === '0' && (
            <span>
              Sua pontuação foi:
            </span>
          )}

          {' '}
          <Score>
            {punctuation}
            {' '}
            pontos!
          </Score>

          <DivOverflowX>
            <table>
              <thead>
                <tr>
                  {results.map((result, resultIndex) => (
                    <th key={`result_${resultIndex}`}>
                      {resultIndex + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {results.map((result, resultIndex) => (
                    <th key={`result_${resultIndex}`}>
                      {result === true ? <CheckIcon /> : <CloseOutlineIcon />}
                    </th>
                  ))}
                </tr>
              </tbody>
            </table>
          </DivOverflowX>

        </h2>

        <Button
          type="button"
          onClick={() => {
            router.push('/');
          }}
        >
          Voltar ao início
        </Button>

      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  onSubmit,
  addResult,
  results,
  questions,
  isExternal,
}) {
  // const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmitted, setQuestionSubmitted] = React.useState(false);
  const isCorrect = selectedAlternative === question.answer;

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    setQuestionSubmitted(true);
    addResult(isCorrect);

    setTimeout(() => {
      onSubmit();
      setQuestionSubmitted(false);
      setSelectedAlternative(undefined);
    }, 2000);
  }

  return (
    <Widget
      as={motion.section}
      transition={{ duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header style={{ padding: 0 }}>
        <QuizStatus
          questions={questions}
          actualQuestion={questionIndex}
          results={results}
          isExternal={isExternal}
        />
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(e) => handleSubmit(e)}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as={motion.button}
                whileTap={{
                  scale: 0.95,
                }}
                id={alternativeId}
                key={alternativeId}
                onClick={() => setSelectedAlternative(alternativeIndex)}
                data-selected={isSelected}
                data-correct={isCorrect}
                data-submitted={isQuestionSubmitted}
                disabled={isQuestionSubmitted}
                type="submit"
              >
                {alternative}
              </Widget.Topic>
            );
          })}
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  RULES: 'RULES',
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ data, name, isExternal }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const totalQuestions = data.questions.length;
  const questionIndex = currentQuestion;
  const question = data.questions[questionIndex];

  function setLoadingToQuiz() {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 3000);
  }

  function setLoadingToRules() {
    setTimeout(() => {
      setScreenState(screenStates.RULES);
    }, 3000);
  }

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setLoadingToRules();
  }, []);

  function goToQuiz() {
    setScreenState(screenStates.LOADING);
    setLoadingToQuiz();
  }

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      goToQuiz();
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={data.bg}>
      <QuizContainer>
        <QuizLogo isExternal={isExternal} />

        {screenState === screenStates.RULES && (
          <RulesWidget
            isExternal={isExternal}
            totalQuestions={totalQuestions}
            onSubmit={goToQuiz}
          />
        )}

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
            results={results}
            questions={data.questions}
            isExternal={isExternal}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultWidget
            name={name}
            results={results}
          />
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/goisjulia" />
    </QuizBackground>
  );
}

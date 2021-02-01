/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import QuizLogo from '../../src/components/QuizLogo';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import Button from '../../src/components/Button';
import Spinner from '../../src/components/Loading';

function LoadingWidget() {
  return (
    <Widget>
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

function ResultWidget({ results }) {
  const router = useRouter();

  return (
    <Widget>
      <Widget.Header>
        <h3>
          Vamos ao resultado!
        </h3>
      </Widget.Header>
      <Widget.Content>
        <h2>
          Você acertou
          {' '}
          {results.filter((result) => result).length}
          {' '}
          questões, parabéns!

          <ol>
            {results.map((result) => (
              <li>
                {result === true ? 'Acertou' : 'Errou'}
              </li>
            ))}
          </ol>
          {' '}
        </h2>

        <Button
          type="button"
          onClick={() => {
            router.push('/');
          }}
        >
          Recomeçar
        </Button>

      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
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
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
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
                as="button"
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
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function setLoadingToQuiz() {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 3000);
  }

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setLoadingToQuiz();
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setScreenState(screenStates.LOADING);
      setLoadingToQuiz();
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT
          && (
            <ResultWidget
              results={results}
            />
          )}
      </QuizContainer>
    </QuizBackground>
  );
}

/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import Spinner from '../src/components/Loading';

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

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);

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

        <form>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
              >
                <Input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  onClick={(infosDoEvento) => {
                    infosDoEvento.preventDefault();
                    onSubmit();
                  }}
                />
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
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  const router = useRouter();

  function setLoadingToQuiz() {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 3000);
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
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT
          && (
            <Widget>
              <Widget.Header>
                <h3>
                  Vamos ao resultado!
                </h3>
              </Widget.Header>
              <Widget.Content>
                <h2>
                  Você acertou X questões, parabéns!
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
          )}
      </QuizContainer>
    </QuizBackground>
  );
}

import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';
import Spinner from '../src/components/Loading';
import Loader from '../src/components/Loader';

const screenStates = {
  LOADING: 'LOADING',
  HOME: 'HOME',
};

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);

  function setLoadingToHome() {
    setTimeout(() => {
      setScreenState(screenStates.HOME);
    }, 3000);
  }

  React.useEffect(() => {
    setLoadingToHome();
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      {screenState === screenStates.LOADING && (
        <Loader />
      )}
      {screenState === screenStates.HOME && (
        <QuizContainer>
          <QuizLogo
            isExternal={false}
          />

          <Widget
            as={motion.section}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function submit(infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`quiz/how-i-met-your-quiz/goisjulia/${name}`);
              }}
              >
                <Input
                  name="userName"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome 😉"
                  value={name}
                  autoComplete="off"
                />
                <Button type="submit" disabled={name.length === 0}>
                  {db.description}
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget
            as={motion.section}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <ul>
                {db.external.map((linkExterno) => {
                  const [projectName, gitHubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  const validateName = { name }.name.length === 0 ? '0' : { name }.name;

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        as={Link}
                        href={`quiz/${projectName}/${gitHubUser}/${validateName}`}
                        onClick={() => (
                          setScreenState(screenStates.LOADING)
                        )}
                      >
                        {'📝 '}
                        {projectName}
                        {' | 💻 '}
                        {gitHubUser}
                      </Widget.Topic>
                    </li>
                  );
                })}

              </ul>
            </Widget.Content>
          </Widget>

          <Footer
            as={motion.footer}
            transition={{ delay: 1.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>
      )}
      <GitHubCorner projectUrl="https://github.com/goisjulia" />
    </QuizBackground>

  );
}

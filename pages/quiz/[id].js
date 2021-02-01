/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizesDaGalera({ dbReturn }) {
  return (
    <ThemeProvider theme={dbReturn.theme}>
      <QuizScreen
        externalInfos={
        dbReturn
      }
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');
  const dbReturn = await fetch(`https://${projectName}.${gitHubUser}.vercel.app//api/db`)
    .then((response) => {
      if (response.ok && response !== null) {
        return response.json();
      }
      throw new Error('Falha ao buscar os dados!');
    }).then((jsonResponse) => jsonResponse)
    .catch((err) => {
      console.error(err);
    });

  return {
    props: {
      dbReturn,
    },
  };
}

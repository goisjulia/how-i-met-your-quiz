/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../../../src/screens/Quiz';
import db from '../../../../db.json';

export default function QuizesDaGalera({ dbReturn, params, isExternal }) {
  return (
    <ThemeProvider theme={dbReturn.theme}>
      <QuizScreen
        data={dbReturn}
        name={params.name}
        isExternal={isExternal}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  let dbReturn = db;
  const params = context.query;
  const isExternal = params.githubUser !== 'goisjulia' && params.project !== 'how-i-met-your-quiz';

  if (isExternal) {
    dbReturn = await fetch(`https://${params.project}.${params.githubUser}.vercel.app/api/db`)
      .then((response) => {
        if (response.ok && response !== null) {
          return response.json();
        }
        throw new Error('Falha ao buscar os dados!');
      }).then((jsonResponse) => jsonResponse)
      .catch((err) => {
        console.error(err);
      });
  }

  return {
    props: {
      dbReturn,
      params,
      isExternal,
    },
  };
}

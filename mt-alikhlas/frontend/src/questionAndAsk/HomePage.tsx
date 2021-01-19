import React from 'react';
import { useEffect, useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { QuestionList } from './QuestionsList';
import { PrimaryButton } from './Styles';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { get } from 'https';
import { useAuth } from './Auth';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const renderQuestion = (question: QuestionData) => <div>{question.title}</div>;

export const HomePage: FC<RouteComponentProps> = ({ history, children }) => {
   const [questions, setQuestions] = useState<QuestionData[] | null>(null);

   const [questionsLoading, setQuestionsLoading] = useState(true);

   const [count, setCount] = useState(0);

   const handleAskQuestionClick = () => history.push('/ask');

   const { isAuthenticated } = useAuth();

   useEffect(() => {
      let cancelled = false;
      const goGetUnansweredQuestions = async () => {
         const unsweredQuestions = await getUnansweredQuestions();
         if (!cancelled) {
            setQuestions(unsweredQuestions);
            setQuestionsLoading(false);
         }
      };
      goGetUnansweredQuestions();
      return () => {
         cancelled = true;
      };
   }, []);
   return (
      <Page>
         <div
            css={css`
               margin: 5px auto 20px auto;
               padding: 30px 20px;
               max-width: 600px;
            `}
         >
            <div
               css={css`
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
               `}
            >
               <PageTitle> Unanswered Question </PageTitle>
               <PrimaryButton onClick={handleAskQuestionClick}>
                  Ask a Question
               </PrimaryButton>
            </div>
            {questionsLoading ? (
               <div
                  css={css`
                     font-size: 16px;
                     font-style: italic;
                  `}
               >
                  Loading...
               </div>
            ) : (
               <QuestionList data={questions || []} />
            )}
         </div>
      </Page>
   );
};

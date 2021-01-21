import React from 'react';
import { useEffect, useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { QuestionList } from './QuestionsList';
import { PrimaryButton } from './Styles';
import {
   getAnsweredQuestions,
   getUnansweredQuestions,
   QuestionData,
} from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { get } from 'https';
import { useAuth } from './Auth';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const renderQuestion = (question: QuestionData) => <div>{question.title}</div>;

export const HomePage: FC<RouteComponentProps> = ({ history, children }) => {
   const [unanswered, setUnanswered] = useState<QuestionData[] | null>(null);

   const [answered, setAnswered] = useState<QuestionData[] | null>(null);

   const [questionsLoading, setQuestionsLoading] = useState(true);

   const handleAskQuestionClick = () => history.push('/ask');

   const { isAuthenticated } = useAuth();

   useEffect(() => {
      let cancelled = false;
      const goGetAnsweredQuestions = async () => {
         const answeredQuestions = await getAnsweredQuestions();
         if (!cancelled) {
            setAnswered(answeredQuestions);
            setQuestionsLoading(false);
         }
      };
      const goGetUnansweredQuestions = async () => {
         const unsweredQuestions = await getUnansweredQuestions();
         if (!cancelled) {
            setUnanswered(unsweredQuestions);
            setQuestionsLoading(false);
         }
      };
      goGetAnsweredQuestions();
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
               max-width: 1700px;
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
               <div className="row">
                  <div className="col-6">
                     <QuestionList data={unanswered || []} />
                  </div>
                  <div className="col-6">
                     <QuestionList data={answered || []} />
                  </div>
               </div>
            )}
         </div>
      </Page>
   );
};

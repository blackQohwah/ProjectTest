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
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const renderQuestion = (question: QuestionData) => <div>{question.title}</div>;

export const HomePage: FC<RouteComponentProps> = ({ history, children }) => {
   const [unanswered, setUnanswered] = useState<QuestionData[] | null>(null);

   const [answered, setAnswered] = useState<QuestionData[] | null>(null);

   const [questionsLoading, setQuestionsLoading] = useState(true);

   const handleAskQuestionClick = () => history.push('/ask');

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
                  justify-content: center;
               `}
            >
               <PrimaryButton onClick={handleAskQuestionClick}>
                  Menayakan Pertanyaan
               </PrimaryButton>
            </div>
            <div
               css={css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin: 10px;
                  padding: 5px;
                  color: green;
                  @keyframes hint {
                     0% {
                        -webkit-transform: translateY(0);
                        opacity: 0.4;
                     }
                     100% {
                        -webkit-transform: translateY(0.4em);
                        opacity: 0.9;
                     }
                  }
                  -webkit-animation: hint 1s infinite alternate ease-in-out;
                  animation: hint 0.7s infinite alternate ease-in-out;
               `}
            >
               <span>Klik Judul Pertanyaan Untuk Melihat Detail Jawaban</span>
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
               <div className="row pt-1">
                  <div className="col-6">
                     <PageTitle> Pertanyaan Belum Terjawab </PageTitle>
                     <QuestionList data={unanswered || []} />
                  </div>
                  <div className="col-6">
                     <PageTitle> Pertanyaan Sudah Terjawab </PageTitle>
                     <QuestionList data={answered || []} />
                  </div>
               </div>
            )}
         </div>
      </Page>
   );
};

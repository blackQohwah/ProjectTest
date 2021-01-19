import { FC, useState, useEffect } from 'react';
import { Page } from './Page';
import { QuestionList } from './QuestionsList';
import { searchQuestions, QuestionData } from './QuestionsData';
import { RouteComponentProps } from 'react-router-dom';
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@emotion/react';

export const SearchPage: FC<RouteComponentProps> = ({ location }) => {
   const [questions, setQuestion] = useState<QuestionData[]>([]);
   const searchParams = new URLSearchParams(location.search);
   const search = searchParams.get('criteria') || '';
   useEffect(() => {
      let cancelled = false;
      const doSearch = async (criteria: string) => {
         const foundSearch = await searchQuestions(criteria);
         if (!cancelled) {
            setQuestion(foundSearch);
         }
      };
      doSearch(search);
      return () => {
         cancelled = true;
      };
   }, [search]);

   return (
      <Page title="Search Result">
         {search && (
            <p
               css={css`
                  font-size: 16px;
                  font-style: italic;
                  margin-top: 0px;
               `}
            >
               for "{search}"
            </p>
         )}
         <QuestionList data={questions} />
      </Page>
   );
};

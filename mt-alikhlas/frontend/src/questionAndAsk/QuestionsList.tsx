import { FC } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { accent2, gray5, gray7 } from './Styles';
import { QuestionData, QuestionData1 } from './QuestionsData';
import { Question } from './Question';
import AOS from 'aos';

AOS.init();

interface Props {
   data: QuestionData1[];
   renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList: FC<Props> = ({ data, renderItem }) => {
   return (
      <ul
         css={css`
            list-style: none;
            margin: 10px 0 0 0;
            padding: 0px 20px;
            background-color: ${gray7};
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            border-top: 3px solid ${accent2};
            box-shadow: 0 3px 5px 0 rgba (0, 0, 0, 0.16);
         `}
         data-aos="fade-left"
      >
         {data.map((question) => (
            <li
               key={question.questionId}
               css={css`
                  border-top: 2px solid ${gray5};
                  :first-of-type {
                     border-top: none;
                  }
               `}
            >
               {renderItem ? (
                  renderItem(question)
               ) : (
                  <Question data={question} />
               )}
            </li>
         ))}
      </ul>
   );
};

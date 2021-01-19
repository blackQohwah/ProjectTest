import { FC } from 'react';
import { Link } from 'react-router-dom';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { QuestionData } from './QuestionsData';
import { gray2, gray3 } from './Styles';
import { QuestionList } from './QuestionsList';

interface Props {
   data: QuestionData;
   showContent?: any;
}

export const Question: FC<Props> = ({ data, showContent = true }) => (
   <div
      css={css`
         padding: 10px 0px;
      `}
      data-aos="fade-left"
      data-aos-delay="500"
   >
      <div
         css={css`
            padding: 10px 0px;
            font-size: 19px;
         `}
      >
         <Link
            css={css`
               text-decoration: none;
               color: ${gray2};
            `}
            to={`questions/${data.questionId}`}
         >
            {data.title}
         </Link>
      </div>
      {showContent && (
         <div
            css={css`
               padding-bottom: 10px;
               font-size: 15px;
               color: ${gray2};
            `}
         >
            {data.content.length > 50
               ? `${data.content.substring(0, 50)}...`
               : data.content}
         </div>
      )}
      <div
         css={css`
            font-size: 12px;
            font-style: italic;
            color: ${gray3};
         `}
      >
         {`Asked by ${data.userName} on
              ${data.created.toLocaleDateString()}
              ${data.created.toLocaleTimeString()}`}
      </div>
   </div>
);
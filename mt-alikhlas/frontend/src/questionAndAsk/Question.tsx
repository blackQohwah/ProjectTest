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
   showContent?: boolean;
}

export const Question: FC<Props> = ({ data, showContent = true }) => (
   <div
      css={css`
         padding: 10px 0px;
      `}
      data-aos="fade-up"
      data-aos-delay="500"
   >
      <div
         css={css`
            padding: 10px 0px;
            font-size: 19px;
         `}
      >
         <strong>
            <Link
               css={css`
                  text-decoration: none;
                  color: ${gray2};
                  font-size: 14px;
                  text-align: justify;
                  text-justify: inter-word;
               `}
               to={`questions/${data.questionId}`}
            >
               {data.title}
            </Link>
         </strong>
      </div>
      {showContent && (
         <div
            css={css`
               padding-bottom: 10px;
               font-size: 12px;
               color: ${gray2};
               text-align: justify;
               text-justify: inter-word;
            `}
         >
            {data.content.length > 50
               ? `${data.content.substring(0, 100)} .......`
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

import { FC } from 'react';
import { AnswerData } from './QuestionsData';
import { gray5 } from './Styles';
import { Answer } from './Answer';

/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@emotion/react';

interface Props {
   data: AnswerData[];
}

export const AnswerList: FC<Props> = ({ data }) => {
   return (
      <ul
         css={css`
            list-style: none;
            margin: 10px 0 0 0;
            padding: 0;
         `}
      >
         {data.map((answer) => (
            <li
               css={css`
                  border: 1px solid ${gray5};
               `}
               key={answer.answerId}
            >
               <Answer data={answer} />
            </li>
         ))}
      </ul>
   );
};

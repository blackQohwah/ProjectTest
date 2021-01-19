import { FC } from 'react';
import { gray3 } from './Styles';
import { AnswerData } from './QuestionsData';
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@emotion/react';

interface Props {
   data: AnswerData;
}

export const Answer: FC<Props> = ({ data }) => {
   return (
      <div
         css={css`
            padding: 10px 0px;
         `}
      >
         <div
            css={css`
               padding: 10px 0px;
               font-size: 13px;
            `}
         >
            {data.content}
         </div>{' '}
         <div
            css={css`
               font-size: 12px;
               font-style: italic;
               color: ${gray3};
            `}
         >
            {`Answered by ${data.userName} on
         ${data.created.toLocaleDateString()}
         ${data.created.toLocaleTimeString()}`}
         </div>
      </div>
   );
};

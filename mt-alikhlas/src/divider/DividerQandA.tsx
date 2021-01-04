import { FC } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@emotion/react';

export const DividerQandA: FC = ({ children }) => {
   return (
      <section id="QandA" data-aos="fade-up" data-aos-delay="500">
         <div className="row">
            <div
               className="col-lg-12"
               css={css`
                  font-size: 20px;
                  padding: 5px;
               `}
            >
               {children}
            </div>
         </div>
      </section>
   );
};

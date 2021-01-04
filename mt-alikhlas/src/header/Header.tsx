import { FC, useState } from 'react';

/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@emotion/react';

export const Header: FC = ({ children }) => {
   const [navBar, setNavbar] = useState(false);
   const changeBackground = () => {
      if (window.scrollY >= 500) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };
   window.addEventListener('scroll', changeBackground);
   return (
      <header
         className="fixed-top"
         css={
            navBar
               ? css`
                    transition: all 0.5s;
                    z-index: 997;
                    padding: 15px 0;
                    background: #91ca91;
                 `
               : css`
                    transition: all 0.5s;
                    z-index: 997;
                    padding: 15px 0;
                    background: transparent;
                 `
         }
      >
         {children}
      </header>
   );
};

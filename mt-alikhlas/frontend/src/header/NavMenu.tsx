import React from 'react';
import './navMenu.css';
import { FaMosque as Mosque } from 'react-icons/fa';

/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@emotion/react';

export const NavMenu = () => {
   return (
      <div className="container">
         <div className="container d-flex align-items-center">
            <h1
               className="mr-auto"
               css={css`
                  font-size: 30px;
                  margin: 0;
                  padding: 0;
                  line-height: 1;
                  font-weight: 500;
                  letter-spacing: 2px;
                  text-transform: uppercase;
               `}
            >
               <a
                  href="index.html"
                  css={css`
                     color: black;
                  `}
               >
                  <Mosque
                     css={css`
                        color: green;
                        font-size: 40px;
                     `}
                  />
               </a>
            </h1>
            <nav className="nav-menu navbar navbar-light">
               <ul>
                  <li>
                     <a href="index.html">Home</a>
                  </li>
                  <li>
                     <a href="#about">About</a>
                  </li>
                  <li>
                     <a href="#gallery" className="mr-3">
                        Gallery
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   );
};

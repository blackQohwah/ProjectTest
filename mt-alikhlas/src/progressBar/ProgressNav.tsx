import { useState, useEffect } from 'react';
import './progressNav.css';

export const ProgressNav = () => {
   const [scroll, setScroll] = useState(0);

   useEffect(() => {
      let progressBarHandler = () => {
         const totalScroll = document.documentElement.scrollTop;
         const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
         const scroll: any = `${totalScroll / windowHeight}`;

         setScroll(scroll);
      };

      window.addEventListener('scroll', progressBarHandler);

      return () => window.removeEventListener('scroll', progressBarHandler);
   });
   return (
      <div id="progressNavContainer">
         <div
            id="progressNav"
            style={{
               transform: `scale(${scroll}, 1)`,
               opacity: `${scroll}`,
            }}
         />
      </div>
   );
};

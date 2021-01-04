import { useState, useEffect } from 'react';
import './progressBar.css';

export const ProgressBar = () => {
   const [scroll, setScroll] = useState(0);
   useEffect(() => {
      let progressBarHandler = () => {
         const totalHeight = document.body.scrollHeight - window.innerHeight;
         const progressHeight = (window.pageYOffset / totalHeight) * 100;
         setScroll(progressHeight);
      };

      window.addEventListener('scroll', progressBarHandler);

      // return () => window.removeEventListener('scroll', progressBarHandler);
   });
   return (
      <div>
         <div id="progressBarContainer">
            <div
               id="progressbar"
               style={{
                  height: `${scroll + '%'}`,
               }}
            />
         </div>
      </div>
   );
};

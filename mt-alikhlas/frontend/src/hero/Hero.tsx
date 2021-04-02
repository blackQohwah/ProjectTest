import logo from './hero-img.jpg';
import './hero.css';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { FC } from 'react';
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { jsx, css } from '@emotion/react';

export const Hero: FC = ({ children }) => {
   return (
      <section
         id="hero"
         className="d-flex align-items-center m-8"
         data-aos="fade-up"
         data-aos-easing="ease-in-out"
         data-aos-delay="200"
      >
         <div className="container">
            <div className="row">
               <div
                  className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
               >
                  <h1>Majelis Ta'lim Al-Ikhlas</h1>
                  <div className="d-lg-flex">
                     <a href="#QandA" className="btn-get-started scrollto">
                        Bertanya ???
                     </a>
                  </div>
               </div>
               <div
                  className="col-lg-6 order-1 order-lg-2 hero-img"
                  data-aos="zoom-in"
                  data-aos-delay="200"
               >
                  <img src={logo} className="img-fluid animated" alt="" />
               </div>
            </div>
            <div className="row">
               <div
                  className="col-lg-12"
                  css={css`
                     font-size: 20px;
                     margin-top: 40px;
                     padding: 10px 5px;
                  `}
               >
                  {children}
                  Scroll Down <br />
                  <HiArrowNarrowDown
                     css={css`
                        font-size: 50px;
                        @keyframes downarrow {
                           0% {
                              -webkit-transform: translateY(0);
                              opacity: 0.4;
                           }
                           100% {
                              -webkit-transform: translateY(0.4em);
                              opacity: 0.9;
                           }
                        }
                        -webkit-animation: downarrow 0.6s infinite alternate
                           ease-in-out;
                        animation: downarrow 0.6s infinite alternate ease-in-out;
                     `}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

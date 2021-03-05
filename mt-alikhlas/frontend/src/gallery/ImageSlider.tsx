import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './image-slider.css';
import AOS from 'aos';

AOS.init();

export const ImageSlider = () => {
   const [current, setCurrent] = useState(0);

   const nextSlide = () => {
      setCurrent(current === 26 ? 0 : current + 1);
   };

   const prevSlide = () => {
      setCurrent(current === 0 ? 26 : current - 1);
   };

   //    if (!Array.isArray(slides) || slides.length <= 0) {
   //       return null;
   //    }

   return (
      <section
         id="gallery"
         className="slider"
         data-aos="fade-up"
         data-aos-delay="500"
      >
         <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
         <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
         {SliderData.map((slide, index) => {
            return (
               <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
               >
                  {index === current && (
                     <img
                        src={slide.image}
                        alt="zero image"
                        className="image img-fluid"
                     />
                  )}
               </div>
            );
         })}
      </section>
   );
};

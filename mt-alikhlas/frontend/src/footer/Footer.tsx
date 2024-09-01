import React from 'react';
import './footer.css';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
test
export const Footer = () => {
   return (
      <footer id="footer">
         <div className="footer-newsletter">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6"></div>
               </div>
            </div>
         </div>
         <div className="footer-top">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-6 footer-contact">
                     <h4>Majelis Ta'lim Al-Ikhlas</h4>
                     <p>
                        JL.Hidup Baru 2 RT 05/10 No 10a
                        <br />
                        Gandaria Utara, Keb.Baru, Jakarta Selatan
                        <br />
                        Indonesia <br />
                        <br />
                     </p>
                  </div>
                  <div className="col-lg-6 col-md-6 footer-links">
                     <h4>Our Social Networks</h4>
                     <p>Social Media Majelis ta'lim Al-Ikhlas</p>
                     <div className="social-links mt-3">
                        <a
                           href="https://web.facebook.com/Majelis-Taklim-Al-Ikhlas-Jakarta-Selatan-406616799756680"
                           className="facebook"
                           target="_blank"
                        >
                           <AiFillFacebook />
                        </a>
                        <a
                           href="https://www.instagram.com/mt_al_ikhlas/"
                           className="instagram"
                           target="_blank"
                        >
                           <AiFillInstagram />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container footer-bottom clearfix">
            <div className="copyright">
               &copy; Copyright
               <strong>
                  <span> Adam </span>
               </strong>
               . All Rights Reserved
            </div>
            <div className="credits">
               Designed by
               <a href="https://www.instagram.com/adammasjid/"> Adam Masjid</a>
            </div>
         </div>
      </footer>
   );
};

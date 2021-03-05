import React from 'react';
import './footer.css';

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
                        United States <br />
                        <br />
                        <strong>Phone:</strong> +1 5589 55488 55
                        <br />
                        <strong>Email:</strong> info@example.com
                        <br />
                     </p>
                  </div>
                  <div className="col-lg-6 col-md-6 footer-links">
                     <h4>Our Social Networks</h4>
                     <p>Social Media Majelis ta'lim Al-Ikhlas</p>
                     <div className="social-links mt-3">
                        <a href="#" className="twitter">
                           <i className="bx bxl-twitter"></i>
                        </a>
                        <a href="#" className="facebook">
                           <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="#" className="instagram">
                           <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="#" className="google-plus">
                           <i className="bx bxl-skype"></i>
                        </a>
                        <a href="#" className="linkedin">
                           <i className="bx bxl-linkedin"></i>
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

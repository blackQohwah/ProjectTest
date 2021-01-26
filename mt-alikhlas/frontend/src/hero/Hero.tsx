import logo from './hero-img.jpg';
import './hero.css';

export const Hero = () => {
   return (
      <section id="hero" className="d-flex align-items-center m-8">
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
                     <a
                        href="#"
                        className="venobox btn-watch-video"
                        data-vbtype="video"
                        data-autoplay="true"
                     >
                        Watch Video <i className="icofont-play-alt-2"></i>
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
         </div>
      </section>
   );
};

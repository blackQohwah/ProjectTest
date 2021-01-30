import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

AOS.init();

export const About = () => {
   return (
      <section className="about mt-5 p-5">
         <div className="container" data-aos="fade-up" data-aos-delay="500">
            <div className="section-title">
               <h2 className="p-5">Majelis Ta'lim Al-ikhlas</h2>
            </div>
            <div className="row content">
               <div className="col-lg-6">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Asperiores laudantium quis fugit obcaecati possimus officia
                     praesentium, quidem eum sint consequatur dolorem! Officiis
                     cupiditate aliquid, incidunt hic illum sapiente qui!
                     Aperiam.
                  </p>
                  <br /> <br />
               </div>
               <div className="col-lg-6 pt-4 pt-lg-0">
                  <p>
                     Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                     occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum.
                  </p>
                  <br /> <br />
               </div>
            </div>
         </div>
      </section>
   );
};

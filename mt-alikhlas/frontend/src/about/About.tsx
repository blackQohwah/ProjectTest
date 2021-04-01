import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

AOS.init();

export const About = () => {
   return (
      <section className="about mt-5 p-5">
         <div className="container" data-aos="fade-up" data-aos-delay="500">
            <div className="section-title p-5">
               <h3>Sekilas Tentang</h3>
               <h3>Majelis Ta'lim Al-ikhlas</h3>
            </div>
            <div className="row content">
               <div className="col-lg-6 pt-4 pt-lg-0">
                  <p>
                     Puji syukur atas segala nikmat yang Allah SWT berikan, dan
                     atas kehendaknya pula Majlis ini terbentuk tahun 2012 yang
                     dipimpin oleh Ust. Achmad Ferdian dengan nama Al-Ikhlas.
                     Berorientasi Syiar Agama islam dan mengajak untuk lebih
                     mencintai Rosululloh SAW, pada awalnya MT Al-Ikhlas
                     melakukan Ta'lim nya setiap malam Jum'at dari rumah jamaah
                     ke rumah jamaah lainnya dengan membaca maulid Nabi dan
                     Ratibul Atthos, pada saat itu belum ada pembahasan fiqh dan
                     hadist. Setelah beberapa saat berjalan barulah diadakan
                     kajian fiqh yang disampaikan oleh Ust. Abdurahman LC.MA dan
                     kemudian dilengkapi oleh adanya kajian Hadist yang
                     disampaikan oleh Ust. Fandy Achmad Mudzakir.
                  </p>
                  <br /> <br />
               </div>
               <div className="col-lg-6 pt-4 pt-lg-0">
                  <p>
                     Alhamdulillah, Allah SWT masih mengizinkan perjuangan Syiar
                     ini berlanjut hingga sekarang dan InysaAllah terus
                     berkesinambungan nantinya. Majelis Ta'lim ini adalah sebuah
                     manifestasi kesungguhan dari seorang hamba yang berharap
                     akan Rahmat dari Allah SWT dan Syafaat Baginda Rasulullah
                     SAW. Website ini dibuat untuk membatu perjuangan dakwah
                     para Guru-guru kita lewat pemanfaatan teknologi ke arah
                     yang lebih positif. Semoga website ini dapat bermanfaat.
                  </p>
                  <br /> <br />
               </div>
            </div>
         </div>
      </section>
   );
};

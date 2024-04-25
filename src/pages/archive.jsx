import React from 'react';
import Navbar from '../Components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules';
import ArchiveCSS from '../Styling/archive.module.css'


const Archive = () => {
  return (
      <>
      <Navbar />
      <div className={ArchiveCSS.container}>
        <h1 className={ArchiveCSS.heading}>Performances By Members</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={ArchiveCSS.swiper_container}
        >
          <SwiperSlide>
            <iframe width={500} height={300} src="https://www.youtube.com/embed/yQjPUSjZiW8?si=Yy2F_RdNpWcN3REO" title="Ang Laga De x Jab Saiyaan" allowFullScreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe width={500} height={300} src="https://www.youtube.com/embed/dbHExfO__RM?si=ega1lMmz4_kH9i_u" title="Pehla Nasha x Raabta" allowFullScreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
          <iframe width={500} height={300} src="https://www.youtube.com/embed/Ih9AFhWoue8?si=wp4EBpVTANdmCnYM" title="VIT Guitar Jam" allowFullScreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe width={500} height={300} src="https://www.youtube.com/embed/RldWm83UyKM?si=H7vGyDvziLFqVm8J" title="No Flux Given" allowFullScreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
          <iframe width={500} height={300} src="https://www.youtube.com/embed/pn33loUQKuU?si=0EIa7Hmx_alCvYJ7" title="Madari - VITMC" allowFullScreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
          <iframe width={500} height={300} src="https://www.youtube.com/embed/MgfbmYIiVjs?si=vo1930LgTNzcam-c" title="Riviera Events" allowFullScreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
          <iframe width={500} height={300} src="https://www.youtube.com/embed/fT7FhGtJZxo?si=N-nTcPjLkEvXTtln" title="Dekha Hazaro Dafaa" allowFullScreen></iframe>
          </SwiperSlide>
  
          <div className={ArchiveCSS.slidercontroler}>
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      </>
    );
  };


export default Archive